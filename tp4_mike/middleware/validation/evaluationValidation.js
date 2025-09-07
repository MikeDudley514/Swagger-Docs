const { check, validationResult } = require("express-validator");

exports.evaluationValidation = [
  check("user_id")
    .trim()
    .not()
    .isEmpty()
    .withMessage("L'ID de l'utilisateur ne doit pas être vide!")
    .isInt()
    .withMessage("L'ID de l'utilisateur doit être un entier."),
  check("matiere_id")
    .trim()
    .not()
    .isEmpty()
    .withMessage("L'ID de la matière ne doit pas être vide!")
    .isInt()
    .withMessage("L'ID de la matière doit être un entier."),
  check("note")
    .trim()
    .not()
    .isEmpty()
    .withMessage("La note ne doit pas être vide!")
    .isNumeric()
    .withMessage("La note doit être numérique."),
  check("date_evaluation")
    .trim()
    .not()
    .isEmpty()
    .withMessage("La date d'évaluation ne doit pas être vide!")
    .isISO8601()
    .withMessage("La date d'évaluation doit être au format ISO8601."),
];

exports.evaluationValidationError = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};
