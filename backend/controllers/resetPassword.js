const bcrypt = require('bcryptjs');
const student = require('../models/student');

const userTypes = {
  student: student,
};

const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password, role } = req.body;

  const userSchema = userTypes[role];
  console.log(password);

  try {
    const user = await userSchema.findOne({
      resetToken: token,
      resetTokenExpires: { $gt: Date.now() },
    });
    if (!user)
      return res.status(400).json({
        message: 'Invalid or expired token',
        redirect: '/forgot-password',
      });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    user.resetToken = undefined;
    user.resetTokenExpires = undefined;

    await user.save();

    res.json({ message: 'Password successfully reset!', redirect: '/' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = resetPassword;
