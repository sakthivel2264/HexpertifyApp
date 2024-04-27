import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx';
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import Profiles from './ConsultantsCard/Profiles'
import Login from './autho/Login'
import Protected from './autho/Protected.jsx';
import Account from './autho/Account.jsx';
import Signup from './autho/SignUp.jsx';
import Form from './Pages/Form.jsx'
import Success from './Pages/Success.jsx';

const App = () => {
  
  return (
    <AuthContextProvider>
    <Router>
      <div className="min-h-screen ">
        <div className='gradient-bg-welcome'>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/profiles' element={<Profiles/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/form' element={
              <Protected>
                <Form/>
              </Protected>
            }/>
            <Route path='/success' element={<Success/>}/>
            <Route
            path='/account'
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
            {/* Add more routes as needed */}
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
    </AuthContextProvider>
  )
}

export default App