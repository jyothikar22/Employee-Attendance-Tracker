const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/employees', require('./routes/employees'));
app.use('/api/attendance', require('./routes/attendance'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
