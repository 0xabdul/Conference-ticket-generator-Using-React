import { useState } from "react";
import logo from './assets/logo-full.svg';
import upload from './assets/icon-upload.svg';
import info from './assets/icon-info.svg';
import avatar from './assets/image-avatar.jpg';
import github from './assets/icon-github.svg';
import "./App.css";

function App() {
  const [notshow,setnotshow]=useState(false);
  const [show,setshow]=useState(true);
  const [block,setblock]=useState(true);
  const [fullname,setfullname]=useState('');
  const [email,setemail]=useState('');
  const [username,setusername]=useState('');
  const [er,seter]=useState('');
  const [fil ,setfil]=useState(null);
  const [pre,setpre]=useState(null);
  const [nobrowse,setnobrowse]=useState(true);
  const [browse,setbrowse]=useState(false);
  const [code,setcode]=useState('');

  const ticket = ()=>{
    return Math.floor(Math.random()*100000);
    }
  
  const click = (e) =>{
     e.preventDefault();
      if(!fil){
        seter('please upload');
        return;
      }
      const newcode = ticket();
      setcode(newcode);
    
      setshow(false);
      setnotshow(true);
      setblock(false);
      }
    const change =(e) =>{
       e.preventDefault();
      const li = e.target.files[0];
       if (!["image/jpeg", "image/png"].includes(li.type)) {
          seter('Only JPG or PNG files are allowed');
          return;
  }
      setfil(li);
      setnobrowse(false);
      setbrowse(true);
      seter(false);
      
      if(li){
        setpre(URL.createObjectURL(li))
      }
    }

    const reset =() =>{
      setpre(null);
      setfil(null);
    }

  return (
    <>
      <div className="container">
        <div className="logo-img">
          <img src={logo} alt="logo-img"></img>
        </div>
        {block &&(
        <div className="loger">
        <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
        <h2>Secure your spot at next year's biggest coding conference.</h2>
        </div>
        )}
         {show && (
         <div className="content">
          <div className="data-upload">
            <p>Upload Avatar</p>
            <div className="upload">
            <input type="file" onChange={change} style={{display :"none"}} id="browse"></input>
            <label htmlFor="browse" className="upload-btn">
            {browse && (  
            <div className="re">
            <img src={pre} alt="preview-img" width="45px" height="45" style={{borderRadius:"0.3rem"}} className="h"></img>
            <div className="fun">
             <p>Add img</p>
            <p 
            onClick={(e)=> {e.preventDefault();
              reset();
            }}
            >
            Remove Img
            </p>
            </div>
            </div>
            )}
            {nobrowse && (
            <div className="enter">
            <img src={upload} alt="upload-img"></img>
            <p className="drag">Drag and drop or click to upload</p>
            </div>
            )}
            </label>
            </div>
            <div className="mustbe">
           <img src={info} alt="errimg" className={er ? "red" : "gray"}></img>
           <p style={{color : er ? "red" : "gray"}}>
            {er || "Upload (JPG or PNG, max size: 500KB)."}
            </p>
           </div>
           </div>
          <div className="name">
          <p>Full Name</p>
          <input type="text" alt="name" className="name-input" onChange={(e)=>setfullname(e.target.value)}></input>
          </div>
          <div className="email">
          <p>Email Address</p>
          <input type="text" alt="emailaddress" className="email-input" onChange={(e) => setemail(e.target.value)} placeholder="example@gmail.com"></input>
          </div>
          <div className="git-user">
          <p>Github Username</p>
          <input type="text" alt="username" className="github-user" onChange={(e) => setusername(e.target.value)} placeholder="@username"></input>
          </div>
          <div className="gen-btn">
          <button className="gen-btn" type="button" onClick={click}>Generate My Ticket</button>
        </div>
        </div>
        )}
        {notshow && (
        <div className="second-content">
        <div className="usr-name">
        <p className="s">Congrats,<span className="col">{fullname || "No Name"}!</span> your ticket is ready.</p>
          </div>
          <div className="usr-cont">
          <p className="dis">We've emailed your ticket to <span className="colchange">{email || "@example6005@gmail.com"}</span> and will send updates in the run up to the event.</p>
          </div>
          <div className="ticket">
            <img src="/pattern-ticket.svg" alt="ticket-img" className="tick-img"></img>
            <div className="board">
             <img src={logo} alt="second logo" className="lo"></img>
             </div>
            <p className="date">Jan 31, 2025 / Austin, TX</p>
            <div className="user-box">
            <div className="av-img">
            <img src={pre || avatar} alt="avatar-img"></img>
            </div>
            <div className="us-pro">
            <p className="na">{fullname || "No Name"}</p>
            <div className="git-fl">
            <img src={github} alt="github"></img>
            <p className="pl">@{username || "Not Found!"}</p>
            </div>
            </div>
            </div>
            <div className="codegen">
            <p className="co">#{code}</p>
            </div>
            </div>
      </div>
        )}
      </div>

    </>
  );
}

export default App;
