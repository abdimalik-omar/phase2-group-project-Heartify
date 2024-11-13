import './App.css'
import Home from './pages/Home.jsx'
// import Organisation from '../src/pages/Organisation.jsx'
// import Individual from '../src/pages/Individual.jsx'
// import SignUp from '../src/pages/SignUp.jsx'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

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
