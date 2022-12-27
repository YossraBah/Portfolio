import React from 'react'
import Skill from './Skill'

const About = () => {
  return (
    <div id='about' className='bg-darkColor text-gray-300 w-4/5 mx-auto'>
      <div className='flex flex-col md:flex-row md:justify-between'>
        <div className='text-3xl font-bold md:order-2 md:text-4xl'>
          <h1 className='md:hidden mb-6'>About Me</h1>
       </div>
          <img className='max-w-sm md:w-1/3 md:order-1 p-2 object-cover md:mr-5 rounded-3xl' src={require('./../Images/aboutme.jpg')} alt="yossra's photo"/>
          <div className='md:w-3/4 md:order-3 mt-4'>
            <h1 className='hidden md:flex text-2xl font-bold md:order-2 md:text-4xl my-5'>About Me </h1>
            <p >
            I am a computer science student at <span className='font-bold'>Higher Institut of Applied Sciences and Technology</span> of Sousse, Eager to learn and develop my skills and achieve my goals.
            <br/>
            Learning something new everyday is a must in my opinion and being engaged in an activity no matter how small it is helped me a lot to find my balance and constantly refresh my soul and energy.
            <br/>
            Currently I specialize in<span className='font-bold'> Web development </span>but I am looking forward to discover other fields in the future such as <span className='font-bold'>AI ML</span> and <span className='font-bold'>Blockchain</span>.
            Learning never ends so does my learning journey.  
            </p>
       </div>
      </div>
      <div className='text-3xl font-bold md:order-2 md:text-4xl mt-12'>
          <h1>Skills :</h1>
       </div>
       <div className='p-5 flex flex-wrap justify-center font-bold text-center'>
        <Skill icon={<ion-icon name="logo-html5"></ion-icon>} name='HTML' color='bg-purple-400'/>
        <Skill icon={<ion-icon name="logo-css3"></ion-icon>} name='CSS' color='bg-purple-500'/>
        <Skill icon={<ion-icon name="logo-javascript"></ion-icon>} name='JavaScript' color='bg-purple-600'/>
        <Skill icon={<ion-icon name="logo-figma"></ion-icon>} name='Figma' color='bg-purple-700'/>
        <Skill icon={<ion-icon name="logo-github"></ion-icon>} name='GitHub' color='bg-purple-800'/>
        <Skill icon={<ion-icon name="logo-react"></ion-icon>} name='ReactJs' color='bg-purple-600'/>
        <Skill icon={<ion-icon name="logo-nodejs"></ion-icon>} name='NodeJs' color='bg-purple-500'/>
        <Skill icon='E' name='Express' color='bg-purple-600'/>
        <Skill icon='~~' name='Tailwind' color='bg-purple-400'/>
       </div> 
    </div>
  )
}

export default About
