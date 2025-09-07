const jwt = require("jsonwebtoken");
const TOKEN_SECRET_KEY = "WEB_4D2_00003";
const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).send("Un jeton est requis pour l'authentification");
  }

  try {
    const decoded = jwt.verify(token, TOKEN_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).send("Jeton Invalid");
  }
};
module.exports = verifyToken;
