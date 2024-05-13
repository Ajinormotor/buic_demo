
import { useEffect } from 'react'
import './App.css'
import Countries from './Component/Countries'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Routs from './Routs/Routs'

import AOS from 'aos';


function App() {

  

  useEffect(()=>{
    AOS.init()
  },[]);
  

  return (
    <main className="relative overflow-x-hidden">
<Header />
<Routs />
<Countries  />
<Footer />

    </main>
  )
}

export default App
