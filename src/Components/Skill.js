import React from 'react'

const Skill = (props) => {
  return (
    <div className='p-3 text-gray-200 w-40 md:w-60 md:p:6 transition transform hover:-translate-y-1 duration-200'>
        <div className={`${props.color} rounded-lg`}>
        <div className='md:text-xl pt-2'>{props.icon}</div>
        <h1 className='mt-2.5 md:text-xl pb-2'>{props.name}</h1>
        </div>
    </div>
  )
}

export default Skill
