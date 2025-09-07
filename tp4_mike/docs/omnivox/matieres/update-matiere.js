module.exports = {
  // Méthode de l'opération
  put: {
    tags: ["MATIERE CRUD operations"], // Tag de l'opération.
    description: "Mettre à jour les informations d'une matière", // Description de l'opération.
    operationId: "updateMatiereById", // ID unique de l'opération.
    parameters: [
      {
        name: "id",
        in: "path",
        description: "L'identifiant de la matière à mettre à jour",
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
              nom: {
                type: "string",
                description: "Le nouveau nom de la matière",
              },
              description: {
                type: "string",
                description: "La nouvelle description de la matière",
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
        description: "Matière mise à jour avec succès", // Description de la réponse.
        content: {
          // Type de contenu
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Success", // Modèle de données de succès
            },
          },
        },
      },
      // Code de réponse
      500: {
        description: "Erreur lors de la mise à jour de la matière", // Description de la réponse.
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
