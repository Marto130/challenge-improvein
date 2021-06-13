const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "The email is required."],
  },

  password: {
    type: String,
    select: true,
    required: [true, "The password is required."],
  },

  status: {
    type: Boolean,
    default: true,
  },

  createAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  const encript = await bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));

  user.password = encript;
  next();
});

UserSchema.methods.comparePassword = async function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("user", UserSchema);
