const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  employeeId: { type: String, required: true, unique: true },
  role: { type: String, enum: ['Employee', 'Manager'], default: 'Employee' },
});

module.exports = mongoose.model('Employee', EmployeeSchema);
