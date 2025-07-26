import { useState } from 'react'
import gptlogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import message from './assets/message.svg'
import rocket from './assets/rocket.svg'
import send from './assets/send.svg'  
import usericon from './assets/user-icon.png'
import chatlogo from './assets/chatgptLogo.svg'


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
      <div className="chats">
        <div className="chat">
          <img className="img" src={usericon} alt="" />
          <p>what is the weather in delhi</p>
        </div>

        <div className="chat bot">
          <img  className="img"  src={chatlogo} alt="" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi nam enim officia harum quod praesentium deleniti vel doloribus, rerum hic id molestias expedita soluta reiciendis ipsa qui modi sed eveniet.</p>
        </div>
      </div>
      <div className="footer">
        <div className="inp">
          <input type="text" placeholder="send a message" />
          <button className="send"><img src={send} alt="" /></button>
        </div>
        <p>chatGPT may prode incorrect output</p>
      </div>

    </div>
   </div>
  )
}

export default App
