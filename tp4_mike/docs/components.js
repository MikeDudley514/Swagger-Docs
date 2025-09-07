module.exports = {
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      // User model
      User: {
        type: "object", // data type
        properties: {
          id: {
            type: "integer", // data-type
            description: "ID de l'utilisateur", // desc
            example: 1234, // example of an id
          },
          username: {
            type: "string", // data-type
            description: "Nom d'utilisateur", // desc
            example: "JohnDoe", // example of a username
          },
          email: {
            type: "string", // data-type
            description: "Email de l'utilisateur", // desc
            example: "johndoe@example.com", // example of an email
          },
          password: {
            type: "string", // data-type
            description: "Mot de passe de l'utilisateur", // desc
            example: "password123", // example of a password
          },
        },
      },
      // Evaluation model
      Evaluation: {
        type: "object", // data type
        properties: {
          id: {
            type: "integer", // data-type
            description: "ID de l'évaluation", // desc
            example: 1234, // example of an id
          },
          user_id: {
            type: "integer", // data-type
            description: "ID de l'utilisateur associé à cette évaluation", // desc
            example: 5678, // example of a user id
          },
          matiere_id: {
            type: "integer", // data-type
            description: "ID de la matière associée à cette évaluation", // desc
            example: 7890, // example of a matiere id
          },
          note: {
            type: "number", // data-type
            description: "Note de l'évaluation", // desc
            example: 15.5, // example of a note
          },
          date_evaluation: {
            type: "string", // data-type
            format: "date-time",
            description: "Date de l'évaluation",
            example: "2024-05-12", // example of a date
          },
        },
      },
      // Matiere model
      Matiere: {
        type: "object", // data type
        properties: {
          id: {
            type: "integer", // data-type
            description: "ID de la matière", // desc
            example: 1234, // example of an id
          },
          nom: {
            type: "string", // data-type
            description: "Nom de la matière", // desc
            example: "Mathématiques", // example of a name
          },
          description: {
            type: "string", // data-type
            description: "Description de la matière", // desc
            example: "Cours de mathématiques avancées", // example of a description
          },
        },
      },
      Error: {
        type: "object",
        properties: {
          message: {
            type: "string",
            description: "Message d'erreur",
            example: "Une erreur s'est produite",
          },
        },
      },
    },
  },
};
