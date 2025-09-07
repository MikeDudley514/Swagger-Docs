module.exports = {
  // Méthode de l'opération
  delete: {
    tags: ["MATIERE CRUD operations"], // Tag de l'opération.
    description: "Supprimer une matière", // Description de l'opération.
    operationId: "deleteMatiereById", // ID unique de l'opération.
    security: [
      {
        bearerAuth: [],
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        description: "L'identifiant de la matière à supprimer",
        required: true,
        schema: {
          type: "integer",
        },
      },
    ],
    // Réponses attendues
    responses: {
      // Code de réponse
      204: {
        description: "Matière supprimée avec succès", // Description de la réponse.
      },
      // Code de réponse
      500: {
        description: "Erreur lors de la suppression de la matière", // Description de la réponse.
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
