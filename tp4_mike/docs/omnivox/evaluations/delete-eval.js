module.exports = {
  // Définition des schémas de sécurité utilisés par l'API
  security: [
    {
      BearerAuth: [], // Nom du schéma de sécurité (ex: BearerAuth) avec le jeton JWT
    },
  ],
  // Méthode de l'opération
  delete: {
    tags: ["EVALUATION CRUD operations"], // Tag de l'opération.
    description: "Supprimer une évaluation existante", // Description de l'opération.
    operationId: "deleteEvaluation", // ID unique de l'opération.
    parameters: [
      {
        name: "id",
        in: "path",
        description: "L'identifiant de l'évaluation à supprimer",
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
    // Réponses attendues
    responses: {
      // Code de réponse
      204: {
        description: "Évaluation supprimée avec succès", // Description de la réponse.
      },
      // Code de réponse
      500: {
        description: "Erreur lors de la suppression de l'évaluation", // Description de la réponse.
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
