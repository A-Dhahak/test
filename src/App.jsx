import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


  var Products =  [
    {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
       
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        
    },
    {
        id: 2,
        title: "iPhone X",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        
    },
    {
        id: 3,
        title: "Samsung Universe 9",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249, 
        thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
       
    }]
    function App() {
  return (
    <>
      {Products.map(el=>(
        <div>
          <img src = {el.thumbnail}/>
          <h2>{el.title}</h2>
          <span>{el.description}</span>
          
        
        
        </div>
      ))      }
      
    </>
  )
}

export default App
