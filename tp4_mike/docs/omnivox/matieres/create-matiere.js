module.exports = {
  // Méthode de l'opération
  post: {
    tags: ["MATIERE CRUD operations"], // Tag de l'opération.
    description: "Ajouter une nouvelle matière", // Description de l'opération.
    operationId: "addMatiere", // ID unique de l'opération.
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
              nom: {
                type: "string",
                description: "Le nom de la matière",
              },
              description: {
                type: "string",
                description: "La description de la matière",
              },
            },
            required: ["nom", "description"], // Champs obligatoires
          },
        },
      },
    },
    // Réponses attendues
    responses: {
      // Code de réponse
      200: {
        description: "Matière ajoutée avec succès", // Description de la réponse.
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
        description: "Erreur lors de l'ajout de la matière", // Description de la réponse.
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
