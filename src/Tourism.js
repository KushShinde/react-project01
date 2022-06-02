import React from 'react'
import App from './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Databag from './Databag' 
import Data from './Data'
import Template from './Components/Template'

export default function Tourism() {
  const template = Databag.map(data=>{
    return(
        <Template
           key ={data.key}
          item={data}
        />
    )
})
  return (
    <div>
        <Header/>
        <Navbar/>
        <section>{template}
                      </section>

    </div>
  )
}
