import React from "react";
import ButtonList from "./ButtonList";
import Videos from "./Videos";

const Body= ()=>{
    return (
        <div className='bg-black p-4 w-full h-screen'>
            <ButtonList/>
            <Videos/>
        </div>
    )
}

export default Body;