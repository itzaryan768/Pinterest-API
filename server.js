const express = require('express');
const pinterestEndpoints = require('./endpoints/pinterest');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint routing
app.use('/api/pinterest', pinterestEndpoints);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
