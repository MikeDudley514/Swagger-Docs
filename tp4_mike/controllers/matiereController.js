const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./maisonneuveDb.sqlite");

// Routes Matières
exports.addMatiere = async (req, res) => {
  try {
    const { nom, description } = req.body;
    await insertMatiere(nom, description);
    res.status(200).json({ message: "Matière ajoutée avec succès." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur lors de l'ajout de la matière." });
  }
};

exports.getAllMatieres = async (req, res) => {
  try {
    const matieres = await getMatieres();
    res.status(200).json(matieres);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des matières." });
  }
};

exports.getMatiereById = async (req, res) => {
  try {
    const matiere = await getMatiereById(req.params.id);
    if (matiere) {
      res.status(200).json(matiere);
    } else {
      res.status(404).json({ error: "Matière non trouvée." });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération de la matière." });
  }
};

exports.updateMatiereById = async (req, res) => {
  try {
    const { nom, description } = req.body;
    const id = req.params.id;
    await updateMatiereById(id, nom, description);
    res.status(200).json({ message: "Matière mise à jour avec succès." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors de la mise à jour de la matière." });
  }
};

exports.deleteMatiereById = async (req, res) => {
  try {
    const id = req.params.id;
    await deleteMatiereById(id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors de la suppression de la matière." });
  }
};

// Functions
function insertMatiere(nom, description) {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO matiere (nom, description) VALUES (?, ?)",
      [nom, description],
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

function getMatieres() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM matiere", (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function getMatiereById(id) {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM matiere WHERE id = ?", [id], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}

function updateMatiereById(id, nom, description) {
  return new Promise((resolve, reject) => {
    db.run(
      "UPDATE matiere SET nom = ?, description = ? WHERE id = ?",
      [nom, description, id],
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

function deleteMatiereById(id) {
  return new Promise((resolve, reject) => {
    db.run("DELETE FROM matiere WHERE id = ?", [id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
