const express = require('express');
const Attendance = require('../models/Attendance');
const router = express.Router();

// Mark Attendance
router.post('/mark', async (req, res) => {
  try {
    const attendance = new Attendance(req.body);
    await attendance.save();
    res.status(201).json(attendance);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get Attendance Records
router.get('/', async (req, res) => {
  try {
    const records = await Attendance.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
