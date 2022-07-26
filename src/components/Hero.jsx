import React from 'react'
import {CloudUploadIcon , DatabaseIcon , PaperAirplaneIcon, ServerIcon} from '@heroicons/react/solid' ; 
import image from '../assets/cyber-bg.png'
const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-col-2  max-w-[1240px] m-auto'>
          <div className='flex flex-col justify-center   px-2 py-8'>
            <p className='text-2xl'>Unique Sequencing & Production</p>
            <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Managmendt</h1>
            <p className='text-2xl'>This our Tech Brand.</p>
            <button className=' px-6 sm:w-[60%]'>Get Started</button>
          </div>
          <div className='w-600'>
            <img className="w-full" src={image}  />
          </div>
          <div className='absolute flex flex-col py-8 md:min-w-[750px] bottom-[-5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border-slate-300 text-center shadow-xl'>
            <p className='text-4xl'>Data Services</p>
            <div className='flex justify-between'>
              <p className='flex px-4 py-2 text-slate-500 '><CloudUploadIcon className='h-6 mr-2 '/>zbouba</p>
              <p className='flex px-4 py-2 text-slate-500 '><CloudUploadIcon className='h-6 mr-2'/>zbouba</p>
              <p className='flex px-4 py-2 text-slate-500 '><CloudUploadIcon className='h-6 mr-2'/>zbouba</p>
              <p className='flex px-4 py-2 text-slate-500 '><CloudUploadIcon className='h-6 mr-2'/>zbouba</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Hero