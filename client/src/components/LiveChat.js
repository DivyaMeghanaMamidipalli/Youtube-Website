import React from 'react'
import ChatMessage from './ChatMessage';
import {useDispatch, useSelector} from "react-redux";
import { addMessage } from '../utils/chatSlice';
import { useState, useEffect } from 'react';
import { generateRandomName, generateRandomString } from '../utils/helper';



const LiveChat = () => {
    const [liveMessage,setLiveMessage]=useState("");
    const dispatch=useDispatch();
    const chatMessages=useSelector((store) =>store.chat.messages)
    useEffect(()=>{
        const i = setInterval(()=>{
            dispatch(addMessage({
                name:generateRandomName(),
                message:generateRandomString(25),
            }))
        },1500);
        return () => clearInterval(i);
    },[])
  return (
    <>
    <div className="p-2 border border-black ml-2 w-full h-[460px] bg-slate-200 rounded-lg overflow-y-scroll flex-col-reverse">
       {chatMessages.map((c,i)=> (
            <ChatMessage key ={i} name={c.name} message={c.message}/>
        ))}
    </div>
    <form className='w-full border border-black mx-2 rounded-lg flex'
            onSubmit={(e)=>{
                e.preventDefault();
                dispatch(addMessage({
                    name:"Meghana",
                    message:liveMessage,
                }))
                setLiveMessage("");
            }}>
        <input className='w-full border border-black m-1 rounded-lg px-2' 
            type="text"
            value={liveMessage}
            onChange={(e)=>{
                setLiveMessage(e.target.value);
            }}
            />
        <button className='border border-black bg-slate-200 p-1 m-1 rounded-lg'>Send</button>
    </form>
    </>
  )
}

export default LiveChat
