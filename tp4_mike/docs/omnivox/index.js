const createUser = require("./users/create-user");
const loginUser = require("./users/login-user");
// evaluation
const createEval = require("./evaluations/create-eval");
const getEval = require("./evaluations/get-eval");
const updateEval = require("./evaluations/update-eval");
const deleteEval = require("./evaluations/delete-eval");
// matiere
const createMatiere = require("./matieres/create-matiere");
const getAllMatieres = require("./matieres/get-all-matieres");
const getMatiereById = require("./matieres/get-matiere-id");
const updateMatiere = require("./matieres/update-matiere");
const deleteMatiere = require("./matieres/delete-matiere");
module.exports = {
  paths: {
    "/register": {
      ...createUser,
    },
    "/login": {
      ...loginUser,
    },
    // Evaluation
    "/evaluation": {
      ...createEval,
    },
    "/evaluations": {
      ...getEval,
    },
    "/evaluation/{id}": {
      ...updateEval,
      ...deleteEval,
    },
    // Matiere

    "/matiere": {
      ...createMatiere,
    },
    "/matieres": {
      ...getAllMatieres,
    },
    "/matiere/{id}": {
      ...getMatiereById,
      ...updateMatiere,
      ...deleteMatiere,
    },
  },
};
