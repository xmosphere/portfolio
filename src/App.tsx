import React, { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './components/Projects/ProjectsPage'
import HomePage from './components/HomePage'
import styled from 'styled-components'
import ContactPage from './components/ContactPage'

const FormatDiv = styled.div`
  width: 90%;
`
const theme = {
  colors: {
      colorPrimary :`rgba(100, 100, 255, 1)`,
      colorSecondary :`rgba(150, 150, 255, 1)`,
      colorText :`rgba(255, 255, 255, 1)`,
      colorSubText:`rgba(175, 175, 175, 1)`
  }
}
function App() {

  return (
    <BrowserRouter>
      <Fragment>
        <FormatDiv>
        <Header/>
      <Routes>
        <Route path='/Projects' element={<Projects/>}></Route>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/Home' element={<HomePage/>}></Route>
        <Route path='/Contact' element={<ContactPage/>}></Route>
      </Routes>
      <Footer/>
        </FormatDiv>
      </Fragment>
    </BrowserRouter>

  )
}

export default App
