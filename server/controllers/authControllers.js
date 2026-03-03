const User = require('../models/user');
const { hashPassword, comparePassword } = require('../helpers/auth');

const test = (req, res) => {
  res.json({ message: "Hello world!" });
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if name was entered
    if (!name) {
      return res.json({ error: "Name is required!" });
    }

    // Check if password is valid
    if (!password || password.length < 6) {
      return res.json({ error: "Password must be at least 6 characters long!" });
    }

    // Check if email already exists
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ error: "Email already exists!" });
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password,
    });

    return res.json(user);

  } catch (error) {
    console.log(error);

  }
};

module.exports = {
  test,
  registerUser,
};