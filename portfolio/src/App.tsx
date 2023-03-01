import React, { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'
import HomePage from './pages/Home'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Fragment>
      <Header/>
      <Routes>
        <Route path='/Projects' element={<Projects link='src/assets/projects.csv'/>}></Route>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/Home' element={<HomePage/>}></Route>
        <Route path='/About' element={<About/>}></Route>
      </Routes>
      <Footer></Footer>
      </Fragment>
    </BrowserRouter>

  )
}

export default App
