const student = require('../../models/student');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const studentLoginController = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    console.log('Login attempt:', email);
    const existingUser = await student.findOne({ email });
    if (!existingUser) {
      console.log('User not found');
      return res
        .status(404)
        .json({ message: 'User not found', redirect: '/register' });
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      console.log('Invalid Credsssss');
      return res
        .status(400)
        .json({ message: 'Invalid credentials', redirect: '/login/student' });
    }

    const token = jwt.sign(
      { id: existingUser._id, role: existingUser.role },
      process.env.JWT_SECRET,
      {
        expiresIn: '2h',
      }
    );
    console.log(token, role, { user: existingUser.role });

    const firstLogin = existingUser.isLoggedIn;

    return res.status(200).json({
      message: 'Login successful',
      role,
      user: existingUser.role,
      firstLogin: firstLogin,
      token,
      redirect: firstLogin ? '/profile/student' : '/home',
    });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Internal server error',redirect: '/login/student' });
  }
};

module.exports = { studentLoginController };
