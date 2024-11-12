import './App.css'
import VolunteerRegForm from './components/VolunteerRegForm.jsx'
import OrganizationRegForm from './components/OrganizationRegForm.jsx'
import ContactUs from './pages/ContactUs'


import Home from './pages/Home.jsx'
// import Organisation from '../src/pages/Organisation.jsx'
// import Individual from '../src/pages/Individual.jsx'
// import SignUp from '../src/pages/SignUp.jsx'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

function App() {
  return (
    <>
   App
        {/* <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}> */}
            {/* <Route path="Individual" element={<Individual/>}/>
            <Route path="Organisation" element={<Organisation/>}/>
            <Route path="SignUp" element={<SignUp/>}/>
            <Route path="LogIn" element={<LogIn/>}/> */}

            {/* </Route>
        </Routes>
        </BrowserRouter> */}
        <VolunteerRegForm/>
        <OrganizationRegForm/>
    </>
  )
}

export default App;
