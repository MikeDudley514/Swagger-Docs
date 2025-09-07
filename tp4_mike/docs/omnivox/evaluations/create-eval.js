module.exports = {
  // Méthode de l'opération
  post: {
    tags: ["EVALUATION CRUD operations"], // Tag de l'opération.
    description: "Créer une nouvelle évaluation", // Description de l'opération.
    operationId: "createEvaluation", // ID unique de l'opération.
    security: [
      {
        bearerAuth: [],
      },
    ],
    requestBody: {
      // Corps de la requête attendu
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              user_id: {
                type: "integer",
                description: "L'identifiant de l'utilisateur",
              },
              matiere_id: {
                type: "integer",
                description: "L'identifiant de la matière",
              },
              note: {
                type: "number",
                description: "La note de l'évaluation",
              },
              date_evaluation: {
                type: "string",
                format: "date",
                description: "La date de l'évaluation",
              },
            },
            required: ["user_id", "matiere_id", "note", "date_evaluation"], // Champs obligatoires
          },
        },
      },
    },
    // Réponses attendues
    responses: {
      // Code de réponse
      200: {
        description: "Évaluation créée avec succès", // Description de la réponse.
        content: {
          // Type de contenu
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  description: "Message de succès",
                },
              },
            },
          },
        },
      },
      // Code de réponse
      500: {
        description: "Erreur lors de la création de l'évaluation", // Description de la réponse.
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
