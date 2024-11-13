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
            <Route index element={<Layout/>}>
            <Route path="Home" element={<Home/>}/>
            <Route path="Individual" element={<Individual/>}/>
            <Route path="Organisation" element={<Organisation/>}/>
            <Route path="SignUp" element={<SignUp/>}/>
            <Route path="LogIn" element={<LogIn/>}/>

            </Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
