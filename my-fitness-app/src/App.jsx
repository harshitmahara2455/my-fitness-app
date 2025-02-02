import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material'
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Footer from './components/Footer';



function App(){
  return(
    <Box width ="400px" sx ={{width:{xl:'1488px'}}} m = "auto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercise/id' element = {<ExerciseDetail/>}/>
      </Routes>
      <Footer/>
    </Box>
  )

}




export default App
