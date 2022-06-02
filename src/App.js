import React from "react";
import ReactDOM from "react-dom"
import { Button } from 'react-bootstrap';
import Header from "./Components/Header";
import "./App.css";
import Navbar01 from "./Components/Navbar";
import GridTemplate from "./Components/GridTemplate";
import Data from "./Data";
import BottomCards from "./Components/BottomCards";
import SmallCards from "./Components/SmallCards";
import Tourism from "./Tourism";
import Fitness from "./Fitness";
import Technology from "./Technnology";



export default function App() {
  const card = Data.map(item=>{
    return(<>
      <BottomCards
        key={item.key}
        item={item}/>
      
        </>
    )
  })
  const sCard = Data.map(item=>{
    return(
      <SmallCards
        key={item.key}
        item={item}/>)})

  
  return (
    
    <>
    
     <Header/>
    <Navbar01/>
    <GridTemplate
          img = "thai-buddha.jpg" 
          headline = "Joshua Tree Overnight Adventure"
          Para ="Gujarat is vastly underrated and its a mystery to us why the region 
          isn t more well-known as a tourist destination. 
          It has a plethora of temples and palaces"
           Mode= "Travel"
          Date= "May 30"
    />
  <div style={{display:"flex"}}>
  <p>{card} </p>
    <p className="sCard-Conatainer">  <div className='latest'><h2>Top Posts</h2></div>{sCard}</p>
   </div> 
    
    <div/> 
    
    
          
       
   
    
    
</>
  )
}
