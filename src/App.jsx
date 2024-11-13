import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import OrganizationRegForm from './components/OrganizationRegForm';
import VolunteerRegForm from '../src/components/VolunteerRegForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OrganizationRegForm" element={<OrganizationRegForm />} />
          <Route path="/VolunteerRegForm" element={<VolunteerRegForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
