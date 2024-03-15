import React from 'react'
import{ Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' bg-red-400 border-b-2 border-black text-white h-[12vh] w-screen flex items-center justify-between px-6 fixed z-20'>
        <section className='text-4xl font-mono  '>ZAMAZOR</section>
        <ul className=' flex items-center justify-center gap-5'>
            <li className='text-md hover:text-black duration-150 relative after:contents-[""] after:h-[2px] after:w-[100%] after:bottom-0 uppercase after:left-[0rem] after:duration-150 after:scale-0 hover:after:scale-105 after:bg-black after:absolute'><Link to={'/'} >Home </Link></li>
            <li className='text-md hover:text-black duration-150 relative after:contents-[""] after:h-[2px] after:w-[100%] after:bottom-0 uppercase after:left-[0rem] after:duration-150 after:scale-0 hover:after:scale-105 after:bg-black after:absolute'><Link to={'/more'} >More </Link></li>
            <li className='text-md hover:text-black duration-150 relative after:contents-[""] after:h-[2px] after:w-[100%] after:bottom-0 uppercase after:left-[0rem] after:duration-150 after:scale-0 hover:after:scale-105 after:bg-black after:absolute'><Link to={'/about'} >about </Link></li>
            <li className='text-md hover:text-black duration-150 relative after:contents-[""] after:h-[2px] after:w-[100%] after:bottom-0 uppercase after:left-[0rem] after:duration-150 after:scale-0 hover:after:scale-105 after:bg-black after:absolute'><Link to={'/contact'} >Contact us </Link></li>
        </ul>

    </div>
  )
}

export default Navbar