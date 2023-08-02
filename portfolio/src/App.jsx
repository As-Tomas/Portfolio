import { useState } from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' min-h-screen flex flex-col bg-gradient-to-tl from-teal-300 to-cyan-400'
        // style={{ backgroundImage: `url(https://img.freepik.com/free-vector/abstract-blue-red-paper-cut-background-with-simple-shapes_8829-2520.jpg?w=1060&t=st=1690130003~exp=1690130603~hmac=be02e42313763296a7b2ca027bcf900b6d9d9fd851af8b294c959deb49b04d26)` }}
      >
        <Header />
        <div className='pt-20 flex-grow h-[90vh] w-full overflow-hidden overflow-y-scroll'>
        <Main/>          
        </div>
        

        <Footer/>
        
      </div>
      
    </>
  )
}

export default App
