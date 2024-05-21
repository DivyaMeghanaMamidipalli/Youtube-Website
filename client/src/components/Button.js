import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className="px-5 py-2 m-2  bg-gray-300 border-1px rounded-lg w-max">
            {name}
        </button>
    </div>
  )
}

export default Button
