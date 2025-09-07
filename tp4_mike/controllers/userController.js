const bcrypt = require("bcryptjs");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./maisonneuveDb.sqlite");
const jwt = require("jsonwebtoken");
const TOKEN_SECRET_KEY = "WEB_4D2_00003";
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await getUserByUsername(username);
    if (user) {
      return res.status(400).json({ message: "Cet utilisateur existe déjà." });
    }
    const passwordHashed = await bcrypt.hash(password, 10);
    await insertUser(username, email, passwordHashed);
    res.status(200).json({ message: "Utilisateur créé avec succès." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors de l'enregistrement de l'utilisateur" });
  }
};

function getUserByUsername(username) {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM users WHERE username=?", [username], (err, row) => {
      if (err) {
        reject();
      } else {
        resolve(row);
      }
    });
  });
}

exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await getUserByUsername(username);

    if (!user) {
      return res.status(400).json({ message: "Username/Password invalide" });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Username/Password invalide" });
    }

    //---
    const token = jwt.sign({ username }, TOKEN_SECRET_KEY, { expiresIn: 3600 });

    res
      .status(200)
      .json({ message: "Connexion reussie.", token, expireDans: 3600 });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors de l enregisterment de l utilisateur" });
  }
};

function insertUser(username, email, password) {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO Users (username, email, password) VALUES (?, ?, ?)",
      [username, email, password],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
}

function getUserByUsername(username) {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM users WHERE username=?", [username], (err, row) => {
      if (err) {
        reject();
      } else {
        resolve(row);
      }
    });
  });
}
