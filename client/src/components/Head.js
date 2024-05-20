import React from "react";
import Menu from '../images/menuIcon.png';
import Utubelogo from '../images/logo.png';
import UserIcon from '../images/UserIcon.png';
import {useDispatch} from "react-redux";
import {toggleMenu} from "../utils/appSlice";

const Head = ()=>{

    const dispatch=useDispatch();

    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu());
    };

    return (
    <div className="grid grid-flow-col h-16 p-3 shadow-lg bg-black">
        <div className="flex col-span-1">
        <img 
            onClick={()=>toggleMenuHandler()}
            alt="menu" 
            src={Menu}
            className=" w-10 h-8 mx-2 cursor-pointer"
        />
        <img 
            alt="logo"
            src={Utubelogo}
            className="h-10 w-15 ml-5 mr-1"
        />
        </div>
        <div className="Search col-span-10 text-center  ">
            <input className="w-1/2 border border-gray-700 p-2 rounded-l-full bg-black" type="text"/>
            <button  
                className=" border border-gray-700 p-2 rounded-r-full bg-zinc-900 text-white"
                onClick={()=>{

                }}
                >

                search
            </button>
        </div>
        <div className="col-span-1">
            <img alt="user icon"
                src={UserIcon}
                className="h-10 w-10"
            />
        </div>
    </div>
    )
}

export default Head;