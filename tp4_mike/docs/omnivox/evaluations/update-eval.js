module.exports = {
  // Méthode de l'opération
  put: {
    tags: ["EVALUATION CRUD operations"], // Tag de l'opération.
    description: "Mettre à jour une évaluation existante", // Description de l'opération.
    operationId: "updateEvaluation", // ID unique de l'opération.
    parameters: [
      {
        name: "id",
        in: "path",
        description: "L'identifiant de l'évaluation à mettre à jour",
        required: true,
        schema: {
          type: "integer",
        },
      },
    ],
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
              note: {
                type: "number",
                description: "La nouvelle note de l'évaluation",
              },
              date_evaluation: {
                type: "string",
                format: "date",
                description: "La nouvelle date de l'évaluation",
              },
              matiere_id: {
                type: "integer",
                description:
                  "L'identifiant de la matière associée à cette évaluation",
              },
            },
            required: ["note", "date_evaluation", "matiere_id"], // Champs obligatoires
          },
        },
      },
    },
    // Réponses attendues
    responses: {
      // Code de réponse
      200: {
        description: "Évaluation mise à jour avec succès", // Description de la réponse.
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
        description: "Erreur lors de la mise à jour de l'évaluation", // Description de la réponse.
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
