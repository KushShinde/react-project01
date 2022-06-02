import React from 'react'
import "../App.css"
import App from '../App'

export default function SmallCards(props) {
  return (
    <div> 
    <span className='small-container'>
    
    <span className='Child-small-container'>
      <span >
        <img style={{height:"120px", width:"200px"}} src="https://www.india.com/wp-content/uploads/2018/08/Main7-1.jpg"/>
      </span>
      <span>
      <h4>{props.item.tittle}</h4>
      <p style={{fontSize:"13px"}}>Gujarat is vastly underrated and its a mystery to us why the region isnt more well-</p>
      <span  style={{display:"inline"}}> <p style={{fontSize:"10px"}}>Travel</p><p style={{color:"lightgrey"}}>/{props.item.Year}</p></span>
     </span>
    </span>
    </span>
    </div>
    
  )
}
