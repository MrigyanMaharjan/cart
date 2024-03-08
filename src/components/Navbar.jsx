import React from 'react'
import{ Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-black text-white h-[10vh] w-screen flex items-center justify-between px-4'>
        <section className='text-2xl '>ZAMAZOR</section>
        <ul className=' flex items-center justify-center gap-5'>
            <li className='hover:text-orange-400 duration-150 relative after:contents-[""] after:h-[2px] after:w-[100%] after:bottom-0 capitalize after:left-[0rem] after:duration-150 after:scale-0 hover:after:scale-105 after:bg-red-500 after:absolute'><Link to={'/home'} >Home </Link></li>
            <li className='hover:text-orange-400 duration-150 relative after:contents-[""] after:h-[2px] after:w-[100%] after:bottom-0 capitalize after:left-[0rem] after:duration-150 after:scale-0 hover:after:scale-105 after:bg-red-500 after:absolute'><Link to={'/more'} >More </Link></li>
            <li className='hover:text-orange-400 duration-150 relative after:contents-[""] after:h-[2px] after:w-[100%] after:bottom-0 capitalize after:left-[0rem] after:duration-150 after:scale-0 hover:after:scale-105 after:bg-red-500 after:absolute'><Link to={'/about'} >about </Link></li>
            <li className='hover:text-orange-400 duration-150 relative after:contents-[""] after:h-[2px] after:w-[100%] after:bottom-0 capitalize after:left-[0rem] after:duration-150 after:scale-0 hover:after:scale-105 after:bg-red-500 after:absolute'><Link to={'/contact'} >Contact us </Link></li>
        </ul>

    </div>
  )
}

export default Navbar