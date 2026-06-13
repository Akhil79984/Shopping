


import React, {useState} from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import Collections from '../Component/Collections'
import Banner from '../Component/Banner'
import { Gents, Ladies } from '../data'
import WomenCollections from '../Component/WomenCollections'
import ExampleArray from '../../ExampleArray'

const MainPage = () => {
  const [gentsFashion, setgentsFashion]= useState(Gents)
  const [WomensFashion, setWomenFashion]= useState(Ladies)
  console.log(Gents)
  console.log(Ladies)
  return (
    <div>
      
      <Header/>
      <Banner/>           
      <Collections gentsFashion={gentsFashion}/>
      <WomenCollections WomensFashion={WomensFashion}/>
       <Footer/>
       
    </div>
  )
}

export default MainPage;