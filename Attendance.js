const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  employeeId: { type: String, required: true },
  date: { type: Date, default: Date.now },
  clockIn: { type: String },
  clockOut: { type: String },
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
