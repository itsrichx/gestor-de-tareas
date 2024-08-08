require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes'); 

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/auth', authRoutes);

//Middleware para procesar Json
app.use(express.json());

// Rutas para servir vistas
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await sequelize.authenticate();
  console.log('Database connected!');
});
