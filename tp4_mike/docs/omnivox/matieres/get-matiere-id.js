module.exports = {
  // Méthode de l'opération
  get: {
    tags: ["MATIERE CRUD operations"], // Tag de l'opération.
    description: "Récupérer une matière par son ID", // Description de l'opération.
    operationId: "getMatiereById", // ID unique de l'opération.
    parameters: [
      {
        name: "id",
        in: "path",
        description: "L'identifiant de la matière à récupérer",
        required: true,
        schema: {
          type: "integer",
        },
      },
    ],
    // Réponses attendues
    responses: {
      // Code de réponse
      200: {
        description: "Matière récupérée avec succès", // Description de la réponse.
        content: {
          // Type de contenu
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Matiere", // Modèle de données de matière
            },
          },
        },
      },
      // Code de réponse
      404: {
        description: "Matière non trouvée", // Description de la réponse.
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
        description: "Erreur lors de la récupération de la matière", // Description de la réponse.
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
