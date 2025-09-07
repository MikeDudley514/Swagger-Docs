const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./maisonneuveDb.sqlite");

exports.saveEvaluation = async (req, res) => {
  try {
    const { user_id, matiere_id, note, date_evaluation } = req.body;
    await insertEvaluation(user_id, matiere_id, note, date_evaluation);
    res.status(200).json({ message: "Evaluation enregistrée avec succès." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors de l'enregistrement de l'Evaluation" });
  }
};

exports.getAllEvaluations = async (req, res) => {
  try {
    const evaluations = await getEvaluations();
    res.status(200).json(evaluations);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors de la recuperation des Evaluations" });
  }
};

exports.getUserEvaluationByID = async (req, res) => {
  try {
    const evaluations = await getEvaluationByID(req.params.user_id);
    res.status(200).json(evaluations);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors de la recuperation des Evaluations" });
  }
};

function getEvaluations() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM evaluation", (err, rows) => {
      if (err) {
        reject();
      } else {
        resolve(rows);
      }
    });
  });
}

function getEvaluationByID(user_id) {
  return new Promise((resolve, reject) => {
    db.all(
      "SELECT * FROM evaluation WHERE user_id= ?",
      [user_id],
      (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      }
    );
  });
}

function insertEvaluation(user_id, matiere_id, note, date_evaluation) {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO evaluation (user_id, matiere_id, note,date_evaluation) VALUES (?, ?,?,?)",
      [user_id, matiere_id, note, date_evaluation],
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
exports.updateEvaluationByID = async (req, res) => {
  try {
    const id = req.params.id; // Utiliser le même nom que dans la spécification OpenAPI
    const { matiere_id, note, date_evaluation } = req.body;
    await updateEvaluation(id, matiere_id, note, date_evaluation);
    res.status(200).json({ message: "Évaluation mise à jour avec succès." }); // Retourner un objet avec la structure spécifiée
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors de la mise à jour de l'évaluation." });
  }
};

function updateEvaluation(id, matiere_id, note, date_evaluation) {
  return new Promise((resolve, reject) => {
    db.run(
      "UPDATE evaluation SET matiere_id = ?, note = ?, date_evaluation = ? WHERE id = ?",
      [matiere_id, note, date_evaluation, id],
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

exports.deleteEvaluationByID = async (req, res) => {
  try {
    const id = req.params.id; // Utiliser req.params.id pour récupérer l'ID de l'évaluation
    await deleteEvaluation(id);
    res.status(204).json({ message: "Evaluation supprimée avec succès." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors de la suppression de l'évaluation." });
  }
};
function deleteEvaluation(id) {
  return new Promise((resolve, reject) => {
    db.run("DELETE FROM evaluation WHERE id = ?", [id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
