import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import SignUpPage from './components/SignUpPage';
import LogIn from './components/LogIn';
import Aboutus from './components/Aboutus';
import VolunteerRegForm from './components/VolunteerRegForm';
import OrganizationRegForm from './components/OrganizationRegForm';
import ContactUs from './components/ContactUs';
import IndividualDashboard from './components/IndividualDashboard'; // Import Volunteer Dashboard
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route to Layout that renders Navbar and Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/Organization" element={<Organization />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<ContactUs />} />
          
          {/* Wrap individual and organization signup pages with Layout */}
          <Route path="/individual-signup" element={<VolunteerRegForm />} />
          <Route path="/organization-signup" element={<OrganizationRegForm />} />
          
          {/* Add routes for the different dashboards */}
          <Route path="/dashboard" element={<IndividualDashboard />} /> {/* Volunteer Dashboard */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
