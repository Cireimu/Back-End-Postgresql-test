const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");
// #server-side-authentication
// require a valid json web token in oorder to access certain routes
// first checks to see if the auth token is passed in the headers, if not then it returns a 400 error
module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    jwt.verify(authorization, secrets.jwtSecret, function (err, decodedToken) {
      if (err) {
        res.status(401).json({
          message: "You are not authorized to perform this operation",
        });
      } else {
        req.token = decodedToken;
        next();
      }
    });
  } else {
    res
      .status(400)
      .json({ message: "Please login to have access to this operation" });
  }
};
