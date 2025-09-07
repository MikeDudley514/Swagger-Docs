module.exports = {
  // Méthode de l'opération
  get: {
    tags: ["EVALUATION CRUD operations"], // Tag de l'opération.
    description: "Obtenir une évaluation par son identifiant", // Description de l'opération.
    operationId: "getEvaluation", // ID unique de l'opération.
    // Réponses attendues
    responses: {
      // Code de réponse
      200: {
        description: "Évaluation récupérée avec succès", // Description de la réponse.
        content: {
          // Type de contenu
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Evaluation", // Modèle de données de l'évaluation
            },
          },
        },
      },
      // Code de réponse
      404: {
        description: "Évaluation non trouvée", // Description de la réponse.
        content: {
          // Type de contenu
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Error", // Modèle de données d'erreur
            },
          },
        },
      },
      // Code de réponse
      500: {
        description: "Erreur lors de la récupération de l'évaluation", // Description de la réponse.
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
