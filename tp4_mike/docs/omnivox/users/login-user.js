module.exports = {
  // Méthode de l'opération
  post: {
    tags: ["USER CRUD operations"], // Tag de l'opération.
    description: "Connexion de l'utilisateur", // Description de l'opération.
    operationId: "loginUser", // ID unique de l'opération.
    requestBody: {
      // Corps de la requête attendu
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              username: {
                type: "string",
                description: "Le nom d'utilisateur",
              },
              password: {
                type: "string",
                description: "Le mot de passe de l'utilisateur",
              },
            },
            required: ["username", "password"], // Champs obligatoires
          },
        },
      },
    },
    // Réponses attendues
    responses: {
      // Code de réponse
      200: {
        description: "Connexion réussie", // Description de la réponse.
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
                token: {
                  type: "string",
                  description: "Jeton d'authentification",
                },
                expireDans: {
                  type: "number",
                  description: "Durée d'expiration du jeton en secondes",
                },
              },
              required: ["message", "token", "expireDans"], // Champs obligatoires
            },
          },
        },
      },
      // Code de réponse
      400: {
        description: "Données invalides", // Description de la réponse.
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
