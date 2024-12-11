import { useState } from 'react'

import './App.css'


import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';



function App() {

  const [bgcolor,setBgcolor]=useState('white')
  const [buttoncolor,setButoncolor]=useState(null)
  const [textButton,setTextButton]=useState(null)

  const changeButtonColor=(color)=>{

    console.log("hello");
    setButoncolor(color)
    
   
  }

  const changeTextbutton=(text)=>{
    console.log("hi");

    setTextButton(text)

    
  }

 

  

  return (
    <>
    

    <div id='background' style={{width:'100%', minHeight:'100vh', backgroundColor:bgcolor, display:'flex', justifyContent:'center', alignItems:'center'}}>

    <h1 style={{position:'absolute',top:'50px'}}>Colour Changing</h1>
      

      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button style={{backgroundColor:buttoncolor,color:textButton}} onClick={()=>{setBgcolor('red'),changeButtonColor('white'),changeTextbutton('black')}}>Red</Button>
        <Button style={{backgroundColor:buttoncolor,color:textButton}} onClick={()=>{setBgcolor('blue'),changeButtonColor('green'),changeTextbutton('blue')}} >Blue</Button>
        <Button style={{backgroundColor:buttoncolor,color:textButton}} onClick={()=>{setBgcolor('green'),changeButtonColor('blue'),changeTextbutton('cyan')}}>Green</Button>
      </ButtonGroup>
      



    </div>
     
    </>
  )
}

export default App
