const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const contactRoute = require('./routes/contactRoute');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API route
app.use('/api/contact', contactRoute);

// Serve frontend from client/build
const clientBuildPath = path.join(__dirname, '..', 'client', 'build');
app.use(express.static(clientBuildPath));

// Fallback to index.html for frontend routes
app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
