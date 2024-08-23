const express = require('express');
const { connectDB } = require('./config/db');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
const port = 3001;

// Middleware to parse JSON
app.use(express.json());

// Connect to the database
connectDB();

app.use('/api/v3/app/events', eventRoutes);

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
