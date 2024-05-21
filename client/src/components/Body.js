import React from "react";
import ButtonList from "./ButtonList";
import Videos from "./Videos";

const Body= ()=>{
    return (
        <div className=' p-4 w-70% h-screen'>
            <ButtonList/>
            <Videos/>
        </div>
    )
}

export default Body;