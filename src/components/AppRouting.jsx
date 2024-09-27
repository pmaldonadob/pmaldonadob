import React from 'react';
import { Routes, Route } from 'react-router-dom'

const AppRouting = () => {
     return ( 
          <Routes>
               <Route path="/" element={<h2>Dashboard</h2>} />
               <Route path="/master-data" element={<h2>Master Data</h2>} />
               <Route path="/medical-conditions" element={<h2>Medical Conditions</h2>} />
               <Route path="/medicines" element={<h2>Medicines</h2>} />
               <Route path="/treatments" element={<h2>Treatments</h2>} />
               <Route path="/patient-management" element={<h2>Patient Management</h2>} />
               <Route path="/appointment-scheduling" element={<h2>Appointment Scheduling</h2>} />
               <Route path="/invoices" element={<h2>Invoices Page</h2>} />
               <Route path="/expenses-tracker" element={<h2>Expenses Tracker Page</h2>} />
               <Route path="/reporting" element={<h2>Reporting</h2>} />
          </Routes>
      );
}
 
export default AppRouting;