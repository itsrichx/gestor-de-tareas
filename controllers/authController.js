const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Verificar que name, email y password no sean nulos
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Name, email, and password are required' });
    }

//hashear la password
    const hashedPassword = await bcrypt.hash(password, 10);

//crear el usuario
    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Verificar que email y password no sean nulos
      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }
  
      // Buscar el usuario por email
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Comparar la contraseña
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
      }
  
      // Generar el token JWT
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ message: 'Error logging in', error: error.message });
    }
  };