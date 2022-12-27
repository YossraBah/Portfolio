import React from 'react'
import Button from './Button'

const Home = () => {
  return (
    <div id='home'>
      <div className='bg-homebg bg-no-repeat h-screen w-full bg-cover bg-center sm:object-scale-down'>
        <div className='w-4/5 mx-auto'>
          <div className='flex justify-start items-center'>
            <div className='mt-40'>
              <h1 className='text-white text-5xl md:text-7xl'>Hi,<br/>I'm Yossra,<br/>Web developer<br/></h1>
              <div className='mt-4'>
                  <Button><a href='#contact' className='btn'>Contact Me</a></Button>
                  <Button><a href="https://drive.google.com/file/d/1WvBC3NdCGurHf0WD_AVl1wK5V5dutngX/view?usp=share_link" target="_blank">RESUME</a></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
