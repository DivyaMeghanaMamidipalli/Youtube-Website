import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";

const MainContainer= ()=>{
    return (
        <div className="flex">
            <Sidebar/>
            <Body/>
        </div>
    )
}

export default MainContainer;