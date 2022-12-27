import React from 'react'
import Exp from './Exp'

const Experience = () => {
  return (
    <div id='experience' className='bg-darkColor text-gray-300 w-4/5 mx-auto mt-12'>
      <div className='text-3xl md:text-4xl font-bold'>
        <h1 className='mb-12'>Professional Experience</h1>
      </div>
      <div>
        <Exp logo={require('./../Images/techinventors.PNG')} title='Intern with Techinventors' date='01/07/2022 - 01/08/2022' body='Developing a frontend dashboard to manage events and clubs with reactjs' link='https://drive.google.com/file/d/1-SPvlsEpcX7jJH33b2Q6LpJn6QujjkDP/view?usp=share_link'/>
        <Exp logo={require('./../Images/sastec.PNG')} title='Intern with Sastec Skills' date='15/09/2022 - 15/10/2022' body='Mern stack Bootcamp and start developing an e-commerce website' link='https://drive.google.com/file/d/1NMwaazCSMLGbKWHWhSVYD-AXgDGGq1xs/view?usp=share_link'/>
      </div>
    </div>
  )
}

export default Experience
