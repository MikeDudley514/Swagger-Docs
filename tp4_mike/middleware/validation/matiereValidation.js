const { check, validationResult } = require("express-validator");

exports.matiereValidation = [
  check("nom")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Le champ nom ne doit pas être vide!")
    .isLength({ max: 50 })
    .withMessage("Le champ nom doit contenir entre 4 et 50 caractères."),
  check("description")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Le champ description ne doit pas être vide!")
    .isLength({ max: 255 })
    .withMessage("La description ne doit pas dépasser 255 caractères."),
];

exports.matiereValidationError = (req, res, next) => {
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
