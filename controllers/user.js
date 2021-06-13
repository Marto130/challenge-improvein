const { serializeResponse } = require("../utils/serializeResponse");
const { encodeToken } = require("../utils/auth.js");
const User = require("../modelsDB/user");

async function signUp(req, res) {
  try {
    const user = new User({ ...req.body });
    const savedUser = await user.save();

    return res
      .status(201)
      .send(serializeResponse(true, "User created successfully.", user));
  } catch (error) {
    return res
      .status(500)
      .send(serializeResponse(false, "Error creating user.", error.stack));
  }
}

async function signIn(req, res) {
  try {
    const { email, password } = req.body;

    const userFound = await User.findOne({ email });
    if (!userFound)
      return res
        .status(401)
        .send(
          serializeResponse(false, "Login Error.", "Wrong email or password.")
        );

    const validatePassword = await userFound.comparePassword(password);
    if (!validatePassword)
      return res
        .status(401)
        .send(
          serializeResponse(false, "Login Error.", "Wrong email or password.")
        );

    const genToken = encodeToken(userFound);
    if (!genToken) throw new Error("Token could not be generated.");

    return res.status(200).send(
      serializeResponse(true, "Login successfully.", {
        token: genToken,
      })
    );
  } catch (error) {
    return res
      .status(500)
      .send(serializeResponse(false, "Login error.", error.stack));
  }
}

module.exports = {
  signUp,
  signIn,
};
