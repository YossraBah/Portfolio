import React from 'react'
import Button from './Button'

const Project = (props) => {
  return (
    <div className='h-[18rem] w-[18rem] bg-gray-200 shadow-inner rounded-lg'>
        <div className={`${props.color} h-[18rem] w-[18rem] rounded-lg text-gray-800 p-4 relative`}>
          <h1 className='text-center font-bold text-2xl pb-2'>{props.projectName}</h1>
          <p>{props.projectBody}</p>
          <p className='pt-2 font-bold'>{props.tech}</p>
          <div className='right-28 absolute bottom-6'>
          <Button><a href={props.link} target="_blank"><ion-icon name="arrow-forward-outline"></ion-icon></a></Button>
          </div>
        </div>
    </div>
  )
}

export default Project
