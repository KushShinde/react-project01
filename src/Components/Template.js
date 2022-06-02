import React from 'react'
import { Card, Navbar } from 'react-bootstrap';
import Api from '../Databag01';
import App from '../App';
import Header from './Header';
import Navbar01 from './Navbar';



export default function Template(props) {
  

  return (
    <>
     
     <div className='main-template'>
     <span className='template'> 
     <span className='Child-container-05'>
      <span >
        <img style={{height:"170px", width:"270px"}} src="https://th-thumbnailer.cdn-si-edu.com/jzm3Sdi-A4nHAwY_q8LAoOVMKJc=/1072x720/filters:no_upscale():focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg"/>
      </span>
      <span>
      <h4>{props.item.title}</h4>
      <p style={{fontSize:"13px"}}>{props.item.para}</p>
      <span > <p style={{fontSize:"10px"}}>{props.item.mode}</p><p style={{color:"lightgrey"}}>/{props.item.date} </p></span>
     </span>
    
    </span>
     </span>
    
     <span className='small-container'>
    
    <span className='Child-small-container'>
      <span >
        <img style={{height:"120px", width:"200px"}} src="https://www.india.com/wp-content/uploads/2018/08/Main7-1.jpg"/>
      </span>
      <span>
      <h4>{props.item.title}</h4>
      <p style={{fontSize:"13px"}}>{props.item.para}</p>
      <span  style={{display:"inline"}}> <p style={{fontSize:"10px"}}>Travel</p><p style={{color:"lightgrey"}}>/Year</p></span>
     </span>
    </span>
    </span>
</div>



    

    </>
  )
}
