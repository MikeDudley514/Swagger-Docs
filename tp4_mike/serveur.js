const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = 3000;

const db = new sqlite3.Database("./maisonneuveDb.sqlite");
// Database setup
db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE, email TEXT UNIQUE, password TEXT)"
  );
  db.run(
    "CREATE TABLE IF NOT EXISTS evaluation (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, matiere_id INTEGER, note REAL, date_evaluation TEXT, FOREIGN KEY (user_id) REFERENCES users(id))"
  );
  db.run(
    "CREATE TABLE IF NOT EXISTS matiere (id INTEGER PRIMARY KEY AUTOINCREMENT, nom TEXT, description TEXT)"
  );
});

// Controllers
const { registerUser, loginUser } = require("./controllers/userController");
const {
  saveEvaluation,
  getAllEvaluations,
  getUserEvaluationByID,
  updateEvaluationByID,
  deleteEvaluationByID,
} = require("./controllers/evaluationController");

const {
  addMatiere,
  getAllMatieres,
  getMatiereById,
  updateMatiereById,
  deleteMatiereById,
} = require("./controllers/matiereController");

// Middlewares
const {
  userValidation,
  userValidationError,
} = require("./middleware/validation/userValidation");
const {
  evaluationValidation,
  evaluationValidationError,
} = require("./middleware/validation/evaluationValidation");
const {
  matiereValidation,
  matiereValidationError,
} = require("./middleware/validation/matiereValidation");
const authentication = require("./middleware/auth");

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

//OpenAPI
const swaggerUI = require("swagger-ui-express");
const docs = require("./docs");
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));

app.use((req, res, next) => {
  // Récupérer le jeton JWT à partir des en-têtes de la requête
  const token = req.headers.authorization;
  // Si un jeton est présent, l'ajouter au contexte de la requête
  if (token) {
    req.token = token;
  }
  // Passer au middleware suivant
  next();
});

app.post("/register", userValidation, userValidationError, registerUser);

app.post(
  "/evaluation",
  evaluationValidation,
  evaluationValidationError,
  authentication,
  saveEvaluation
);

app.get("/evaluations", getAllEvaluations);

app.put("/evaluation/:id", authentication, updateEvaluationByID);

app.delete("/evaluation/:id", authentication, deleteEvaluationByID);

app.get("/evaluation/:user_id", getUserEvaluationByID);

// Matière routes
app.post(
  "/matiere",
  matiereValidation,
  matiereValidationError,
  authentication,
  addMatiere
);
app.get("/matieres", getAllMatieres);
app.get("/matiere/:id", getMatiereById);
app.put("/matiere/:id", authentication, updateMatiereById);
app.delete("/matiere/:id", authentication, deleteMatiereById);

app.post("/login", userValidation, userValidationError, loginUser);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
