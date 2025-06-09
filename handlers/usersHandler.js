import User from '../models/UserModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (request, h) => {
  try {
    const { name, email, password } = request.payload;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return h.response({ error: 'Email sudah digunakan' }).code(400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    const savedUser = await user.save();

    return h.response({
      message: 'Registrasi berhasil',
      user: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email
      }
    }).code(201);
  } catch (error) {
    return h.response({ error: 'Gagal registrasi pengguna' }).code(500);
  }
};

export const loginUser = async (request, h) => {
  try {
    const { email, password } = request.payload;

    const user = await User.findOne({ email });
    if (!user) {
      return h.response({ error: 'Email tidak ditemukan' }).code(404);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return h.response({ error: 'Password salah' }).code(401);
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    return h.response({
      message: 'Login berhasil',
      token
    }).code(200);
  } catch (error) {
    return h.response({ error: 'Gagal login' }).code(500);
  }
};
