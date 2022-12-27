import React from 'react'

const Button = (props) => {
  return (
    <button className='mt-2.5 mr-4 px-3 py-2 text-gray-100 font-bold bg-gradient-to-r from-purple-600 to-pink-600 transition transform hover:-translate-y-1 duration-200 rounded-xl'>
      {props.children}
    </button>
  )
}

export default Button
