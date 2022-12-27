import React from 'react'
import Button from './Button'

const Contact = () => {
  return (
    <div id='contact' className='w-4/5 mx-auto text-gray-200 mb-3'>
      <div>
      <div className='font-bold text-3xl md:text-4xl text-center mb-20'>
        <h1>I would love to hear from you</h1>
      </div>
      <div className='flex  justify-center items-center sm:justify-evenly flex-col sm:flex-row'>
        <div className='mb-5 w-60 h-60  sm:h-60 sm:mr-5 rounded-lg bg-contactbg bg-cover bg-bottom flex flex-col sm:w-2/3 md:w-1/3 justify-center items-center font-bold'>
          <p className='mb-4 font-bold text-xl'>Get in touch</p>
          <p>bahloulyossra@gmail.com</p>
          <p>Phone : +216 22 393 677</p>
          <Button><a href='mailto:bahloulyossra@gmail.com' className='btn'>Contact Me</a></Button>
        </div>
        <div className='w-60 h-60 sm:h-60 rounded-lg bg-contactbg bg-cover bg-bottom  flex flex-col sm:w-2/3 md:w-1/3 justify-center items-center font-bold'>
          <p className='mb-4 font-bold text-xl'>Social media</p>
          <div className='flex flex-col items-start'>
          <a href='https://www.linkedin.com/in/yossra-bahloul-a49343234/' className='mb-1 hover:text-gray-400 hover:bolder' target="_blank"><ion-icon name="logo-linkedin"></ion-icon> Linkedin</a>
          <a href='https://github.com/YossraBah' className='mb-1 hover:text-gray-400 hover:bolder' ><ion-icon name="logo-github"target="_blank"></ion-icon>  Github</a>
          <a href='https://www.facebook.com/profile.php?id=100008691339177' className='mb-1 hover:text-gray-400 hover:bolder' target="_blank"><ion-icon name="logo-facebook"></ion-icon> Facebook</a>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
