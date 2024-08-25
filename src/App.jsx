import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clients from './Clients';
import Employees from './Employees';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {

  return (
    <div>
      <Navbar />
      <Employees />
      <Clients />
      <Footer />
    </div>
  )
}

export default App
