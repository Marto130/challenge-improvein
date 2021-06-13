const jwt = require("jsonwebtoken");

const getSecret = () => {
  if (!process.env.SECRET) throw new Error("Missing env SECRET.");
  return process.env.SECRET;
};

function encodeToken(user) {
  const payload = {
    sub: user._id,
  };

  try {
    return jwt.sign(payload, getSecret(), {
      algorithm: "HS256",
      expiresIn: 1200,
    });
  } catch (error) {
    console.log(error);
  }
}

function decodeToken(token) {
  if (!token) return null;

  try {
    return jwt.verify(token, getSecret());
  } catch (error) {
    throw new Error(
      `Invalid token. The token could not be decoded: ${error.stack}`
    );
  }
}

module.exports = {
  encodeToken,
  decodeToken,
};
