import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
const Home = () => {
  return (

    <div className='pt-[10vh] h-screen w-screen flex items-center gap-3 flex-col justify-center'>
<div className='absolute -z-30 opacity-0.1'>
  <video className='h-[90vh] w-screen object-cover' src="https://media.istockphoto.com/id/1136267636/video/shenzhen-city-famous-mall-interior-walking-panorama-4k-timelapse-china.mp4?s=mp4-640x640-is&k=20&c=tqkvaX7jSjkH2nFAdHBFWUmz08XMACNvMnRiAX5MOHw=" autoPlay loop muted></video>
</div>
<section className=' bg-transparent border-2 flex items-center justify-center flex-col border-black backdrop-blur-lg p-[4rem] rounded-xl text-white'>
     <p className='text-2xl uppercase duration-200 p-6'> Welcome to my store</p>
     <Link to={"/items"} > <button className='bg-black border-2 p-3 rounded-full hover:bg-white  hover:text-black border-black duration-200  '>Enter store</button></Link>
     </section>
    </div>
    
  )
}

export default Home