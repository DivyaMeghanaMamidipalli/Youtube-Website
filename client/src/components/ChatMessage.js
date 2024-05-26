import React from 'react';
import UserIcon from '../images/UserIcon.png';

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
      <img alt="user icon"
            src={UserIcon}
            className="h-10 w-10"
        />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage
