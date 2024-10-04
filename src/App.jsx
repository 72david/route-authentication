
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import DashBoard from './DashBoard'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Nav from './Nav'
import ProtectedRoute from './ProtectedRoute'


function App() {  

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoute><Nav /></ProtectedRoute>}>
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
