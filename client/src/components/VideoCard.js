import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
    const {snippet, statistics} = info;
    const {channelTitle,title, thumbnails,publishedAt} = snippet;
    function getTimeDifference(publishedAt) {
      const currentDateTime = new Date();
      const publishedDateTime = new Date(publishedAt);
      
      // Calculate the time difference in milliseconds
      const timeDifference = currentDateTime - publishedDateTime;
    
      // Convert milliseconds to seconds
      const timeDifferenceInSeconds = Math.floor(timeDifference / 1000);
    
      if (timeDifferenceInSeconds < 60) {
        return "just now";
      } else if (timeDifferenceInSeconds < 3600) {
        const minutes = Math.floor(timeDifferenceInSeconds / 60);
        return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
      } else if (timeDifferenceInSeconds < 86400) {
        const hours = Math.floor(timeDifferenceInSeconds / 3600);
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;
      } else {
        const days = Math.floor(timeDifferenceInSeconds / 86400);
        return `${days} day${days > 1 ? "s" : ""} ago`;
      }
    }
  const timeDifference = getTimeDifference(publishedAt);
  return (
    <div className="p-2 m-2 w-80 shadow-lg rounded-xl bg-black text-white">
      <img 
        alt="thumbnail"
        src={thumbnails.medium.url}
        className="rounded-lg"
      />
      <ul>
        <li className="font-bold text-sm py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views, {timeDifference} </li>
      </ul>

    </div>
  )
}

export default VideoCard
