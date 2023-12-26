import React from 'react'
import './App.css'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {About, Home, Contact, Skills, Project} from './pages';
import Navbar from './components/Navbar';

function App() {

  return (
    <main className='h-screen w-full '>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/project' element={<Project/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/skills' element={<Skills/>}></Route>
          <Route></Route>
        </Routes>
      </Router>
    </main>
  )
}

export default App
