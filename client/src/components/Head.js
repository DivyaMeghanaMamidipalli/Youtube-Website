import React, { useEffect, useState } from "react";
import Menu from '../images/Hamburger_Menu.png';
import Utubelogo from '../images/Youtube_Logo.png';
import UserIcon from '../images/UserIcon.png';
import {useDispatch} from "react-redux";
import {toggleMenu} from "../utils/appSlice";
import { YouTube_Search_Suggestion_API_Key } from "../utils/constants"; 

const Head = ()=>{
    const [searchQuery,setSearchQuery]= useState("");
    const [suggestions, setSuggestions]=useState([]);
    const [showSuggestions,setShowSuggestions ]=useState(false);

    useEffect(()=>{

        const timer= setTimeout(()=> getSearchSuggestions(), 200);
        return()=>{
            clearTimeout(timer);
        };

    },[searchQuery]);

    const getSearchSuggestions = async ()=>{
        console.log("API CALL" + searchQuery);
        const data= await fetch(YouTube_Search_Suggestion_API_Key + searchQuery);
        const json= await data.json();
        setSuggestions(json[1]);
    };


    const dispatch=useDispatch();

    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu());
    };

    return (
    <div className="grid grid-flow-col h-16 p-3 shadow-lg">
        <div className="flex col-span-1">
        <img 
            onClick={()=>toggleMenuHandler()}
            alt="menu" 
            src={Menu}
            className=" w-15 h-12 mx-2 cursor-pointer"
        />
        <img 
            alt="logo"
            src={Utubelogo}
            className="h-12 w-19 ml-1 mr-1 cursor-pointer"
            
        />
        </div>
        <div className="Search col-span-10 text-center  ">
            <div>
                <input 
                    className="px-5 w-1/2 border border-gray-700 p-2 rounded-l-full " 
                    type="text"
                    value={searchQuery}
                    onChange={(e)=> setSearchQuery(e.target.value)}
                    onFocus={()=> setShowSuggestions(true)}
                    onBlur={()=>setShowSuggestions(false)}
                />
                <button  
                    className=" border border-gray-700 p-2 rounded-r-full bg-zinc-300 ">
                    search
                </button>
            </div>
            {showSuggestions && (
                <div className="absolute fixed left-1/3 w-[37rem] mt-2 bg-white py-2 px-2  shadow-lg rounded-lg border border-gray">
                    <ul className="text-left">
                        {suggestions.map((s) => (
                            <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">{s}</li>
                        ))}
                    </ul>
                </div>
            )}
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