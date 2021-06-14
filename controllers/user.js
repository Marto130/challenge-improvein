const { serializeResponse } = require("../utils/serializeResponse");
const { encodeToken, decodeToken } = require("../utils/auth.js");
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

    const token = encodeToken(userFound, 1);
    if (!token) throw new Error("Token could not be generated.");

    const refreshToken = encodeToken(userFound, 3000);

    await User.findByIdAndUpdate(userFound._id, {
      refreshToken: {
        token: refreshToken,
        expiresIn: 3000,
        status: true,
        createdAt: Date.now(),
      },
    });

    return res.status(200).send(
      serializeResponse(true, "Login successfully.", {
        token,
        refreshToken,
      })
    );
  } catch (error) {
    return res
      .status(500)
      .send(serializeResponse(false, "Login error.", error.stack));
  }
}

async function refreshToken(req, res) {
  try {
    const refreshToken = req.headers.refreshtoken;
    if (!refreshToken)
      return res.status(400).send(serializeResponse(false, null));

    const userId = decodeToken(refreshToken).sub;

    const userFound = await User.findOne({
      _id: userId,
      "refreshToken.token": refreshToken,
    });

    if (!userFound) return res.status(400).send(serializeResponse(false, null));

    const newToken = encodeToken(userFound, 10);

    return res.status(200).send(
      serializeResponse(true, null ,{
        token: newToken,
      })
    );
  } catch (error) {}
}

module.exports = {
  signUp,
  signIn,
  refreshToken,
};
