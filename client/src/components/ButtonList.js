import React from "react";
import Button from "./Button";

const list=["All","Gaming","Songs","Gaming","Movies","Cricket","Engineering","Machine Learning","React","Data Structures","Software Development"]

const ButtonList= ()=>{
    return (
        <div className="flex">
            {
                list.map((item)=>(
                    <Button name={item}/>
                ))
            }
        </div>
    )
}

export default ButtonList;