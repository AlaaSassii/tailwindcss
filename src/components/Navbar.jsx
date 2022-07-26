import React from 'react'
import {MenuIcon , XIcon} from '@heroicons/react/outline'
const Navbar = () => {
    const [nav ,setNav] = React.useState(true) 
    const handleClick = () => { 
        setNav(!nav)
    }
  return (
    <div className='nav w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className="px-2 flex  justify-between w-full h-full items-center">
        <div className=' flex items-center ' >
            <h1 className='capitalize font-bold
            text-3xl mr-4 sm:text-4xl' >brand .</h1>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
                <li>Platforms</li>
                <li>Pricing</li>
            </ul>
        </div>
        <div className='hidden md:flex'>
            <button className='mr-5 border-none bg-transparent '>Sign in</button>
            <button>Sign up</button>
        </div>
        <div className='md:hidden' onClick={handleClick}>
    {nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5'/>}
        </div>
        </div>
        
        {nav ? 
        <></>
    : 
    <div className='md:hidden  w-full absolute bg-zinc-200 px-8 list-none'>
        <li className='list-md border-b-2 border-zinc-300 w-full'>Home</li>
        <li className='list-md border-b-2 border-zinc-300 w-full'>Home</li>
        <li className='list-md border-b-2 border-zinc-300 w-full'>Home</li>
        <li className='list-md border-b-2 border-zinc-300 w-full'>Home</li>
        <li className='list-md border-b-2 border-zinc-300 w-full'>Home</li>
        <div className='flex flex-col my-4'>
        <button className=' bg-transparent text-indigo-600 '>Sign in</button>
        <button className=''>Sign up</button>
        </div>
    </div>
    }
        
       
    </div>
  )
}

export default Navbar