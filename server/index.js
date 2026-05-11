const dns = require('dns');
dns.setServers(['1.1.1.1', '1.0.0.1']); // Forces Node to use Cloudflare's DNS


const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const resumeRoutes = require('./routes/resumeRoutes');




// Connect to MongoDB


dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.send('Backend is running and connected!');
});
app.use(express.json());

// Routes
app.use('/api', resumeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});