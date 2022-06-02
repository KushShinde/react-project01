import React from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import App from './App'
import { Link } from "react-router-dom";
import fitPro from './Fitpro'
import Layout from './Components/Layout';

function  gotClicked(){
    return(<>      
     
       <Layout
       title="High-intensity and intervals"
        para="Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities"
       />
       </>

    )

}






export default function Fitness() {
    const fitApp = fitPro.map(data=>{
        return(
            <>
     
            <div className='main-template'>
            <span className='template'> 
            <span className='Child-container-05'>
             <span >
               <img onClick={gotClicked} style={{height:"170px", width:"270px"}} src="https://th-thumbnailer.cdn-si-edu.com/jzm3Sdi-A4nHAwY_q8LAoOVMKJc=/1072x720/filters:no_upscale():focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg"/>
             </span>
             <span>
             <h4 >{data.title}</h4>
             <p style={{fontSize:"13px"}}>{data.para}</p>
             <span > <p style={{fontSize:"10px"}}>{data.mode}</p><p style={{color:"lightgrey"}}>/{data.date} </p></span>
            </span>
           
           </span>
            </span>
           
            <span className='small-container'>
           
           <span className='Child-small-container'>
             <span >
               <img style={{height:"120px", width:"200px"}} src="https://www.india.com/wp-content/uploads/2018/08/Main7-1.jpg"/>
             </span>
             <span>
             <h4>{data.title}</h4>
             <p style={{fontSize:"13px"}}>{data.para}</p>
             <span  style={{display:"inline"}}> <p style={{fontSize:"10px"}}>Travel</p><p style={{color:"lightgrey"}}>/Year</p></span>
            </span>
           </span>
           </span>
       </div>
       
       
       
           
       
           </>
        )
    })
  return (
    <>
    <Header/>
    <Navbar/>
    <section>
        {fitApp}
    </section>

    </>
  )
}
