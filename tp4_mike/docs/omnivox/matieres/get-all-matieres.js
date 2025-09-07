module.exports = {
  // Méthode de l'opération
  get: {
    tags: ["MATIERE CRUD operations"], // Tag de l'opération.
    description: "Récupérer toutes les matières", // Description de l'opération.
    operationId: "getAllMatieres", // ID unique de l'opération.
    // Réponses attendues
    responses: {
      // Code de réponse
      200: {
        description: "Liste des matières récupérée avec succès", // Description de la réponse.
        content: {
          // Type de contenu
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Matiere", // Modèle de données de matière
              },
            },
          },
        },
      },
      // Code de réponse
      500: {
        description: "Erreur lors de la récupération des matières", // Description de la réponse.
        content: {
          // Type de contenu
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Error", // Modèle de données d'erreur
            },
          },
        },
      },
    },
  },
};
