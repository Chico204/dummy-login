const User = require('../models/user');
const { hashPassword, comparePassword } = require('../helpers/auth');

const test = (req, res) => {
  res.json({ message: "Hello world!" });
};
//register endpoint
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

    const hashedPassword = await hashPassword(password);
    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json(user);

  } catch (error) {
    console.log(error);

  }
};
//login endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.json({ error: "User not found!" });

    const match = await comparePassword(password, user.password);
    if (!match) return res.json({ error: "Incorrect password!" });

    // Success
    return res.json({ message: "Login successful!", user }); 
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = {
  test,
  registerUser,
  loginUser
};