import React, { useState } from 'react'
import Button from './Button'

const Navbar = () => {
  let Links=[
    {name:'Home', link:'#home'},
    {name:'About', link:'#about'},
    {name:'Experience', link:'#experience'},
    {name:'Projects', link:'#projects'},
    {name:'Contact', link:'#contact'}
  ]
  const [open,setOpen] = useState(false)
  return (
    <div className='w-4/5 mx-auto' id='navbar'>
      <div className='md:flex pt-4'>
        <div className='md:flex md:py-4 font-bold text-white md:mr-auto '>
          <span><img className='py-2 pr-8 w-20 sm:w-20 xl:w-1/6 object-contain cursor-pointer' src={require('./../Images/final_logo.png')} alt='logoimage'/></span>
        </div>
        <div onClick={()=>setOpen(!open)} className='font-bold absolute right-12 top-6 text-4xl text-gray-100 cursor-pointer md:hidden'>
        <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
        </div>
        <div className='pb-8'>
          <ul className={`md:flex md:items-center absolute bg-darkColor md:static md:z-auto z-[2] w-full transition-all duration-500 ease-in ${open ? 'top-20 opacity-100 ' : 'top-[-490px]'} md:opacity-100`}>
            {
              Links.map(link=>{
                return <li className='px-2 py-4' key={link.name}>
                  <a className='text-gray-100 hover:text-gray-300 font-bold transition-all duration-500 relative before:content-[""] before:absolute
                  before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-1.5 before:rounded-full before:duration-500 before:bg-gradient-to-r from-purple-600 to-pink-600 hover:before:w-full hover:before:opacity-100 ' href={link.link}>
                    {link.name}
                  </a></li>
              })
            }
          </ul>
        </div>
      </div> 
    </div>
  )
}

export default Navbar
