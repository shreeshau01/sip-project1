// app.js

const express = require('express');
const app = express();
const sequelize = require('./database'); // Import your Sequelize instance

// Middleware
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => { // Sync models with the database before starting the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
