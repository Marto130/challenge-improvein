const { serializeResponse } = require("../utils/serializeResponse");
const { decodeToken } = require("../utils/auth.js");
const User = require("../modelsDB/user");

async function isAuth(req, res, next) {
  const token = req.headers.authorization;
  console.log('refresh', req.headers.refreshtoken);
  if (!token)
    return res.status(403).send(serializeResponse(false, "You must signIn."));

  try {
    const validateToken = await decodeToken(token);
    const userFound = await User.findOne({ _id: validateToken.sub });
    if (!userFound)
      return res.status(401).send(serializeResponse(false, "Invalid token."));

    req.user = userFound
    next();
  } catch (error) {
    return res
      .status(500)
      .send(serializeResponse(false, "Authentication error.", error.stack));
  }
}

module.exports = {
  isAuth,
};
