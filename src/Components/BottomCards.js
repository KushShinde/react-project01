import React from 'react'
import App from '../App'
import Data from '../Data'
import "../App.css"

export default function BottomCards(props) {
  return (
    <>
    
    <span className='container -05'>
    
    <span className='Child-container-05'>
      <span >
        <img style={{height:"170px", width:"270px"}} src="https://www.india.com/wp-content/uploads/2018/08/Main7-1.jpg"/>
      </span>
      <span>
      <h4>{props.item.tittle}</h4>
      <p style={{fontSize:"13px"}}>Gujarat is vastly underrated and its a mystery to us why the region isnt more well-</p>
      <span > <p style={{fontSize:"10px"}}>Travel</p><p style={{color:"lightgrey"}}>/May 2021 </p></span>
     </span>
    </span>
    </span>
    </>
  )
}
