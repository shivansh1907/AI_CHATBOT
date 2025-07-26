import { useState } from 'react'
import gptlogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import message from './assets/message.svg'
import rocket from './assets/rocket.svg'


function App() {


  return (
   <div className="app">
    <div className="sidebar">
      <div className="upper-side">
        <div className="uppersidetop">
          <img src={gptlogo} alt="" className='logo' />
           <span className="brandName">chatGPT</span>
          
        </div>

        <div className="uppersidebottom">
          <button className="midBtn"><img src={addBtn} alt="" className='addBtn'/>NEW CHAT</button>
          <button className="query"><img src={msgIcon} alt="" />What is Programming</button>
          <button className="query"><img src={msgIcon} alt="" />How to use an API?</button>

        </div>
        


      </div>

      <div className="lower-side">
        <div className="listItems"><img src={home} alt="" className="listitemsimg" />Home</div>
         <div className="listItems"><img src={message} alt="" className="listitemsimg" />Save</div>
          <div className="listItems"><img src={rocket} alt="" className="listitemsimg" />Upgrade</div>

      </div>
    </div>

    <div className="main">

    </div>
   </div>
  )
}

export default App
