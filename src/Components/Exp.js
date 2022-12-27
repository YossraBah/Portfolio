import React from 'react'

const Exp = (props) => {
  return (
    <div className='mb-12'>
      <div className='flex'>
        <img src={props.logo} alt="internship entreprise logo" className='rounded-full w-20 h-20 mr-4 md:w-24 md:h-fit md:mr-8'/>
        <div>
        <h1 className='font-bold text-lg md:text-xl'>{props.title}</h1>
        <p className='text-gray-500 font-bold'>{props.date}</p>
        <p className='mt-2 md:mt-4'>{props.body}</p>
        <a className='mt-2 md:mt-4 underline text-gray-300 hover:text-gray-100 hover:bolder' target="_blank" href={props.link}>View certificate</a>
        </div>
      </div>
      </div>
  )
}

export default Exp
