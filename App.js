import React from 'react';
import EmployeeForm from './components/EmployeeForm';
import AttendanceForm from './components/AttendanceForm';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <h1>Employee Attendance Tracker</h1>
      <EmployeeForm />
      <AttendanceForm />
      <Dashboard />
    </div>
  );
}

export default App;

