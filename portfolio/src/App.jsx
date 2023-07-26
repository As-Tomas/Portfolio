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
      <div className=' bg-gradient-to-tl  from-teal-300 to-cyan-400'
        // style={{ backgroundImage: `url(https://img.freepik.com/free-vector/abstract-blue-red-paper-cut-background-with-simple-shapes_8829-2520.jpg?w=1060&t=st=1690130003~exp=1690130603~hmac=be02e42313763296a7b2ca027bcf900b6d9d9fd851af8b294c959deb49b04d26)` }}
      >
        {/* <Header/> */}
        <Main/>
        {/* <Footer/> */}
      </div>
      
    </>
  )
}

export default App
