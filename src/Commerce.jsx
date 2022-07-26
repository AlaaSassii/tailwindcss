import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import TypewriterComponent from 'typewriter-effect'
import image1 from './assets/single.png'
import image2 from './assets/double.png'
import image3 from './assets/triple.png'
import { 
    FaDribbbleSquare , FaFacebookSquare , FaGithubSquare ,FaInstagram , FaInstagramSquare, FaTwitterSquare  
}from 'react-icons/fa'
const Commerce = () => {
    const [show,setShow] = React.useState(false)
    const taggle = () => { 
        setShow(!show)
    }
  return (
    <div>
        <nav className='bg-black w-full h-[72px] text-white fixed z-10'>
            <div className='flex w-[70%] m-auto items-center h-[100%] justify-between'>
                <h1 className='text-xl font-bold uppercase text-green-400'>react.</h1>
                <div  className=' items-center hidden md:flex' >
                <ul className='flex capitalize '>
                    <li>Home</li>
                    <li>account</li>
                </ul>
                <div className='capitalize '>
                    <button className='bg-transparent capitalize mr-3'>sign in</button>
                    <button className='bg-white text-black '>get started</button>
                </div>
                </div>
                <button className='border-none bg-transparent block md:hidden text-white hover:text-green-400' onClick={taggle}>
                   {show ? <AiOutlineClose/> : <AiOutlineMenu/>}
                    </button>
            </div>
          {show?  <div className='bg-black block md:hidden'>
            <ul className='font-bold '>
                    <li>Home</li>
                    <li>account</li>
                </ul>
                <div className='w-[40%] flex m-auto justify-between pb-5'>
                    <button className='bg-transparent capitalize mr-3'>sign in</button>
                    <button className='bg-white text-black' >get started</button>
                </div>
            </div> : <></>}
        </nav>
        <section className='w-full h-[100vh] bg-black text-white relative'>
            <div className='w-[80%] absolute top-[10%] left-[50%] translate-x-[-50%]  translate-y-[50%] text-center'>
                <h6 className='font-bold text-green-400 uppercase ' >growing with data analytics</h6>
                <h1 className='pt-9 text-3xl md:text-7xl font-bold'>grow with data.</h1>
                <div className='flex justify-center'>
                <h3 className='pt-9  text-3xl  md:text-7xl font-bold'>Fast,flexible financing for 
                <TypewriterComponent  
                    options={{
                        autoStart:true , 
                        loop:true  , 
                        delay: 50, 
                        strings:[
                            'Sass' , 'BTB' , 'BTC'
                        ]
                    }}
                />
               
                
                </h3>
                </div>
                <h6 className='text-2xl  md:text-4xl font-bold pt-3 text-gray-500'>Monltor your data analytics to increase revenur for BTB ,BTC,&SASS<br></br> Platforms</h6>
                <button className='bg-green-400 w-[300px] mt-8'>get started</button>
            </div>
                
        </section>
        <section className='bg-black w-full min-h-[20rem] text-white items-center'>
            <div className='w-[90%] md:w-[60%] m-auto flex flex-col md:flex-row  justify-between '>
                <div>
                    <h2 className='text-3xl md:text-5xl font-bold'>want tips & tricks to optimize your flow ?</h2>
                    <p className='text-lg md:text-2xl text-gray-400 p-4'>sign up to our newsletters and stay up to data.</p>
                </div>
                <div>
                    <input type="text" placeholder='search.. ' className='p-2 mr-3 outline-none rounded-md max-w-5'  />
                    <button className=' outline-none rounded-md max-w-5'>notify me</button>
                    <p className='mt-4 capitalize text-lg'>we care about protection of your data Read our</p>
                    <a href="#">Privacy Pollicy</a>
                </div>
            </div>
        </section>
        <section className='min-h-[20rem] text-black w-full grid-cols-3 mt-4 w-[80%] m-auto md:flex '>
            <div className=' border border-gray-200 drop-shadow-lg  md:max-w-[400px] text-center'>
                <img src={image3} className="w-[12%] rounded-lg mx-auto mt-[-20px] " />
                <h4 className='text-3xl font-bold'>single user</h4>
                <h1 className='text-5xl font-bold inline'>$149</h1> <span className='text-3xl font-bold text-gray-500'>/mo</span>
                <p className='p-2 font-bold'>500 GB Storage</p>
                <p className='p-2 font-bold'>1 User Allowed</p>
                <p className='p-2 font-bold'>Send up</p>
            </div>
            <div className=' border border-gray-200 drop-shadow-lg  md:max-w-[33%] text-center '>
                <img src={image3} className="w-[12%] rounded-lg mx-auto mt-[-20px] " />
                <h4 className='text-3xl font-bold'>single user</h4>
                <h1 className='text-5xl font-bold inline'>$149</h1> <span className='text-3xl font-bold text-gray-500'>/mo</span>
                <p className='p-2 font-bold'>500 GB Storage</p>
                <p className='p-2 font-bold'>1 User Allowed</p>
                <p className='p-2 font-bold'>Send up</p>
            </div>
            <div className=' border border-gray-200 drop-shadow-lg md:max-w-[33%] text-center'>
                <img src={image3} className="w-[12%] rounded-lg  mx-auto mt-[-20px]" />
                <h4 className='text-3xl font-bold'>single user</h4>
                <h1 className='text-5xl font-bold inline'>$149</h1> <span className='text-3xl font-bold text-gray-500'>/mo</span>
                <p className='p-2 font-bold'>500 GB Storage</p>
                <p className='p-2 font-bold'>1 User Allowed</p>
                <p className='p-2 font-bold'>Send up</p>
            </div>
        </section>

        <section className='grid lg:grid-cols-3 gap-8 max-w-[1240px]  mx-auto py-16 px-4 
         text-gray-300 bg-black'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] '>React.</h1>
                <p className='py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, facere iure? Id ullam reprehenderit facilis autem neque et, quibusdam mollitia.</p>
                <div className='flex md:w-[75%] my-6 justify-between'>
                    <FaDribbbleSquare size={30}/>
                    <FaFacebookSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaTwitterSquare size={30}/>
                </div>
            </div>
            <div className='lg:cols-span-3 flex justify-between '>
            <div className='text-center'>
                        <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul className='text-sm'>
                        <li>Analytics</li>
                        <li>Solution</li>
                        <li>Commerce</li>
                        <li>Insinghts</li>
                    </ul>
                </div>
                <div className='text-center'>
                        <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul className='text-sm'>
                        <li>Analytics</li>
                        <li>Solution</li>
                        <li>Commerce</li>
                        <li>Insinghts</li>
                    </ul>
                </div>
                <div className='text-center'>
                        <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul className='text-sm'>
                        <li>Analytics</li>
                        <li>Solution</li>
                        <li>Commerce</li>
                        <li>Insinghts</li>
                    </ul>
                </div>

            </div>
        </section>
        <section className='w-[80%] bg-red-600   grid-cols-3'>
            <div className='max-w-[50%] max-h-[250px]  bg-blue-500'> 
            sasd
            </div>
            <div className='max-w-[50%] max-h-[50%]  bg-yellow-300 '> 
            sasd
            </div>
            <div className='max-w-[50%] max-h-[50%]  bg-green-300 '> 
            sasd
            </div>
        </section>
    </div>
  )
}

export default Commerce