import React from "react";
import {useEffect,useState} from "react";
import {YouTube_API_Key} from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const Videos= ()=>{
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
        getVideos();
    },[]);
    const getVideos= async ()=>{
        const data = await fetch(YouTube_API_Key);
        const json = await data.json();
        setVideos(json.items);
    }
    return (
        <div className="flex flex-wrap">
            {videos.map((video) => (
                <Link to={"/watch?v="+ video.id}>
                    <VideoCard key={video.id} info={video}/>
                </Link>
            ))}
        </div>
    )
}

export default Videos;