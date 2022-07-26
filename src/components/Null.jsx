import React from 'react'
import {DiReact} from 'react-icons/di'
import {AiOutlinePlayCircle} from 'react-icons/ai'
import {BsFillPlayFill} from 'react-icons/bs'
const Null = () => {
  return (
    <div>
        <div className='w-full h-[65vh] bg-gray-100 flex items-center justify-center pb-10'>
            <div className='m-auto  flex md:w-3/6 w-5/6  md:items-start items-center'>
            <div className='md:w-1/4 w-[90px]  '>
                <img className='w-full' src={`https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1637008457`}  />
            </div>
            <div className='mt-6 ml-4   w-2/4'>
                <h1 className='text-1   xl md:text-3xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p className='font-2xl mt-2  '>Lorem ipsum, dolor</p>
                <p className='font-3xl mt-2 text-zinc-400 p-2 pl-0'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <hr className='border bg-zinc-300 w-3/4 h-1' />
                <div className={`flex`}>
                    <p className='flex p-3 items-center text-lg '><DiReact className='text-5xl '/>18 min read</p>
                    <p className='flex p-3 items-center text-lg	'><DiReact className='text-5xl'/>18 min read</p>
                    <p className='flex p-3 items-center text-lg	'><DiReact className='text-5xl'/>18 min read</p>
                </div>
                <hr className='border bg-zinc-300 w-3/4 h-1 ' />
                <div className='mt-3 flex flex-col md:flex-row items-center mr-[100px] md:mr-0'>
                    <button className='bg-slate-500 text-stone-50 hover:bg-slate-800 hover:text-stone-50  w-[260%] md:w-auto '>Lorem ipsum dolor sit </button>
                    <button className='bg-slate-500 text-stone-50 mt-2 md:mt-0 md:ml-4 hover:bg-slate-800  hover:text-stone-50  w-[260%]  md:w-auto  '> Lorem ipsum dolor sit </button>
                </div>
            </div>=333333333333333333333333333333333333333333e
            </div>
        </div>
        <div className='  text-bold md:w-[80%] w-[90%] bg-white  m-auto -mt-10 rounded-md '>
            <ul className='grid grid-cols-4 font-bold text-base md:text-lg border-b-2 border-b-gray-100 h-[62px] list-none '>
                <li>summary </li>
                <li>insights</li>
                <li>quotes</li>
                <li>community</li>
            </ul>
            <div className='p-14  flex flex-col md:flex-row'>
                <div className='md:basis-4/6 '>
                    <h2 className='text-3xl md:text-4xl font-bold'>Overview</h2>
                    <p className='mt-7 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, accusantium dolorem repellendus sapiente, dignissimos facilis incidunt voluptatem porro odit, amet aliquam alias quis. Numquam, ipsum perspiciatis quae doloremque doloribus accusantium ea nostrum non dolores quis quisquam cupiditate inventore iusto? Molestiae a ducimus aspernatur enim quo. Fuga pariatur provident magnam facere?</p>
                </div>
                <div className='bg-gray-100 p-5 rounded-lg pt-7 md:basis-2/6 w-[110%]'>
                    <h6 className='text-3xl font-bold'>audiobook</h6>
                    <div className='mt-4 flex flex-col  bg-gradient-to-t from-gray-500 to-slate-500 p-6 h-[140px] w-[95%] m-auto rounded-lg text-white'>
                        <h5 className='text-2xl font-bold'>Overview</h5>
                        <div className='flex mt-8'>
                        <button className=' mr-2 rounded-full w-10 h-10 flex items-center content-center bg-blue-600 hover:bg-blue-900 hover:text-white'>
                            <BsFillPlayFill/>
                        </button>
                        <input type="range" />
                        <span className='mr-2 ml-2 mt-2'>0:00</span>
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1637008457" className='w-[20%] -mt-20' />
                        </div>
                    </div>
                    <ul className='list-decimal	m-auto  w-[70%] text-center mt-5  '>
                        <ol><button className='bg-transparent text-black border-b-2 border-gray-500 rounded-none pb-4 md:w-[100%] flex	justify-between items-center text-lg p-3 cursor-pointer	w-[110%]	'> <span>1.</span>overview <AiOutlinePlayCircle/></button></ol>
                        <ol><button className='bg-transparent text-black border-b-2 border-gray-500 rounded-none pb-4 md:w-[100%] flex justify-between items-center text-lg p-3 opacity-75	 cursor-pointer w-[110%]	'><span>1.</span>overview <AiOutlinePlayCircle/></button></ol>
                        <ol><button className='bg-transparent text-black border-b-2 border-gray-500 rounded-none pb-4	md:w-[100%] flex justify-between items-center text-lg p-3 opacity-40 cursor-pointer	 w-[110%]'><span>1.</span>overview <AiOutlinePlayCircle/></button></ol>
                        <ol><button className='bg-transparent text-black border-b-2 border-gray-500 rounded-none pb-4	md:w-[100%] flex justify-between items-center text-lg p-3 opacity-30 w-[110%]' cursor-default	><span>1.</span>overview <AiOutlinePlayCircle/></button></ol>
                        <ol><button className='bg-transparent text-black border-b-2 border-gray-500 rounded-none pb-4 md:w-[100%] flex  justify-between items-center text-lg p-3 opacity-20 cursor-default	 w-[110%]'><span>1.</span>overview <AiOutlinePlayCircle/></button></ol>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Null