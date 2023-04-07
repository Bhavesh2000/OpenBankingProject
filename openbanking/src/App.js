import React from 'react'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './views/login.component'
import SignUp from './views/profile.component'
import GetBalance from './views/GetBalance'
import FastLink from './views/fastLink'
import Nav from './views/nav'
function App() {
  return (
    <Router>
        {/* <div className="auth-wrapper"> */}
          <div>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/profile" element={<SignUp />} />
              <Route path="/fastlink" element={<FastLink/>} />
              <Route path="/GetBalance" element={<GetBalance/>} />
            </Routes>
        </div>
    </Router>
  )
}
export default App