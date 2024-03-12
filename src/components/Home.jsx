import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (

    <div className='pt-[10vh] h-screen w-screen flex items-center gap-3 flex-col justify-center'>

<video className='videoTag h-screen w-screen absolute' autoPlay loop muted>
        <source src="./components/shop.mp4" type='video/mp4' />
        {/* Add additional <source> tags for other video formats (e.g., webm, ogg) if needed */}
      </video>
     <p className='text-2xl uppercase'> Welcome to my store</p>
     <Link to={"/items"} > <button className='bg-slate-100 border-2 p-2 rounded-full hover:bg-black hover:text-white border-black duration-150  '>Enter store</button></Link>
    </div>
  )
}

export default Home