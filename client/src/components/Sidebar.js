import React from "react";
import {useSelector} from "react-redux";

const Sidebar= ()=>{

    const isMenuOpen=useSelector((store)=> store.app.isMenuOpen);

    if(!isMenuOpen) return null;
    
    return (
        <div className="p-4 shadow-lg w-60 bg-black text-white h-full ">
        <div className="p-4 space-y-2.5">
            <h1>Home</h1>
            <h1>Shorts</h1>
            <h1>Subscriptions</h1>
            <h1>YouTube Music</h1>
        </div>
        <hr></hr>
        <div className="p-4 space-y-2.5">
            <h1 className="font-bold">You</h1>
            <ol className="space-y-2.5">
                <li>Your Channel</li>
                <li>History</li>
                <li>Playlists</li>
                <li>Your Videos</li>
                <li>Watch Later</li>
                <li>Liked Vidoes</li>
                <li>Downloads</li>
            </ol>

        </div>
        <hr></hr>
        <div className="p-4 space-y-2.5">
            <h1 className="font-bold">Subscriptions</h1>
                <ul className="space-y-2.5">
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Gaming</li>
                </ul>
        </div>
        <hr></hr>
        <div className="p-4 space-y-2.5">
            <h1 className="font-bold">Explore</h1>
                <ul className="space-y-2.5">
                    <li>Trending</li>
                    <li>Music</li>
                    <li>Movies</li>
                    <li>Gaming</li>
                    <li>Sports</li>
                </ul>
        </div>
        </div>
    )
}

export default Sidebar;