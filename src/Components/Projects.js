import React from 'react'
import Project from './Project'

const Projects = () => {
  return (
    <div id='projects' className='bg-darkColor w-4/5 mx-auto mb-12 '>
      <div className='text-3xl md:text-4xl font-bold text-gray-300 mb-8 mt-8'>
        <h1>Projects</h1>
      </div>
      <div className='flex flex-wrap justify-center  gap-3'>
        <Project tech="HTMLCSS Media query" link='https://yossrabah.github.io/index' color="hover:bg-purple-700 hover:text-gray-200" projectName="VR Website" projectBody="I created this website after completing a tutorial about responsive web design and media query to practice that skill"/>
        <Project tech="HTML CSS Media query" link='https://yossrabah.github.io/SimpleLife/index.html' color="hover:bg-purple-700 hover:text-gray-200" projectName="Simple Life" projectBody="Responsive web design using media query "/>
        <Project tech="HTML CSS JavaScript" link='https://yossrabah.github.io/Invoice/' color="hover:bg-purple-700 hover:text-gray-200" projectName="Invoice Generator" projectBody="This application is mainly for generating an invoice and update it in a real time when choosing a service"/>
        <Project tech="ReactJs" link='https://scrimba.com/scrim/coa0a47efb5056cd3daaab23b' color="hover:bg-purple-700 hover:text-gray-200" projectName="Meme Generator" projectBody="It is a React application that let the user choose randomly an image and adding text over it"/>
        <Project tech="HTML CSS JS php Mysql" link='#' color="hover:bg-purple-700 hover:text-gray-200" projectName="Travel Agency" projectBody="Creation of a dynamic website of a travel agency to suggest destinations to users and book their tickets"/>
        <Project tech="ReactJs MogoDB NodeJs Express" link='#' color="hover:bg-purple-700 hover:text-gray-200" projectName="E-commerce website" projectBody="This project intoduced me to backend development, dealing with Api's and client server architecture"/>
      </div>
    </div>
  )
}

export default Projects
