// server/app.js
const express = require('express');
const cors = require('cors'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');

const app = express();
const PORT = process.env.PORT || 8002;

// Connect to MongoDB
mongoose.connect('mongodb+srv://syugandharnayak8888:Yugandhar@cluster0.h1auuow.mongodb.net/Claw-ToDo', { useNewUrlParser: true, useUnifiedTopology: true });


// Check MongoDB connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Middleware
app.use(cors());
app.use(bodyParser.json()); 

// Routes
app.use('/api', todoRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
