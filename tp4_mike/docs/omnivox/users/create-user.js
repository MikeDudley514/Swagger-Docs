module.exports = {
  // operation's method
  post: {
    tags: ["USER CRUD operations"], // operation's tag.
    description: "Creer un nouvel utilisateur", // operation's desc.
    operationId: "createUser", // unique operation ID
    requestBody: {
      // expected request body
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              username: {
                type: "string",
                description: "Le nom utilisateur",
              },
              email: {
                type: "string",
                description: "L'email de l'utilisateur",
              },
              password: {
                type: "string",
                description: "Le mot de passe de l'utilisateur",
              },
            },
            required: ["username", "email", "password"], // Mandatory fields
          },
        },
      },
    },
    // expected responses
    responses: {
      // response code
      201: {
        description: "Utilisateur crée avec succès", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/User", // user data model
            },
          },
        },
      },
      // response code
      400: {
        description: "Données invalides", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Error", // error data model
            },
          },
        },
      },
    },
  },
};
