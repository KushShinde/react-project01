import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import '../App.css'



export default function Layout(props) {
  return (
  
    <div className='layout-main'>
    <Header/>
    <Navbar/>
    <div className='layout-img'>
      <img src="https://th-thumbnailer.cdn-si-edu.com/jzm3Sdi-A4nHAwY_q8LAoOVMKJc=/1072x720/filters:no_upscale():focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg"/>
    </div>
    <br/>
    <h3>{}</h3>
    <p style={{fontSize:"40px"}}>{props.para}</p>
    <br/>
    <hr/>
    <br/>
    </div>
    
  )
}
