import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' bg-gradient-to-tl  from-teal-300 to-cyan-400'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
