import { useState } from 'react'
import gptlogo from './assets/chatgpt.svg'


function App() {


  return (
   <div className="app">
    <div className="sidebar">
      <div className="upper-side">
        <div className="uppersidetop">
          <img src={gptlogo} alt="" className='logo' /> <span className="brandName">chatGPT</span>
          <button className="midBtn">NEW CHAT</button>
        </div>

        <div className="uppersidebottom">
          <button className="query">What is Programming</button>
          <button className="query">What is Programming</button>

        </div>
        


      </div>

      <div className="lower-side">

      </div>
    </div>

    <div className="main">

    </div>
   </div>
  )
}

export default App
