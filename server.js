const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const contactRoute = require('./routes/contactRoute');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Backend API Route
app.use('/api/contact', contactRoute);

// ✅ Test route for backend root
app.get('/', (req, res) => {
  res.send('Server is up and running! 🚀');
});

// ✅ Serve frontend static files
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// ✅ Handle all other frontend routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
