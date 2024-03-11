import React, { useState,useEffect } from 'react'
import { Information } from './Information.jsx'

import { Link } from 'react-router-dom'



const Items = () => {

  const[cart,setCart]=useState([])
  const addtocart = (items) => {
    console.log(items.target.id);
    setCart([...cart, items.target.id]);
    console.log(cart)
    console.log(cart.length)
  }

  return (
    <div className='overflow-hidden  flex-col  h-[160vh] w-screen flex items-center justify-center pt-[4rem] '>
  

      <section className='h-full place-items-center w-screen bg-slate-200 gap-3 grid grid-cols-4 p-10 grid-rows-2 '>

       {cart.length === 0 ? (
          <Link to={'/cart'} className='absolute border-2 border-black p-2 hover:bg-black hover:text-white text-black bg-transparent right-10 w-[5vw] duration-150 top-[5rem] flex items-center justify-center'>
            Cart
          </Link>
        ) : (
            <Link
            to={'/cart'}
            className='absolute border-2 border-black p-2 hover:bg-black hover:text-white after:top-[10px] after:left-2 after:contents-[""] after:h-2 after:w-2 after:bg-red-500 after:rounded-full  after:absolute text-black bg-transparent right-10 w-[5vw] duration-150 top-[5rem] flex items-center justify-center'
          >
            Cart
          </Link>
        )}
        
        {Information.map((items, index) => (
          <article key={index} className=' border-2 border-spacing-10 border-black flex items-center justify-center flex-col  relative overflow-hidden  max-h-[50vh] w-[20vw] rounded-lg hover:scale-[1.02] duration-150 bg-transparent'>
            <h3 className='bg-white rounded-t-lg h-[3rem] flex items-center justify-center text-center w-full'>{items.product}</h3>
            <section className=' relative overflow-hidden place-content-center max-h-[50vh] w-full bg-white'>
              <img className=' max-h-[30vh] bg-white min-w-[100%]' src={items.image} alt="" srcset="" />
            </section>
            <section className='bg-white text-center h-[20vh] w-full rounded-b-lg'>
              {items.description}

            </section>
            <button id={items.product} onClick={addtocart} className='absolute border-2 border-black p-1 capitalize  hover:-translate-y-1 duration-150 rounded-md bottom-3 left-[6rem] hover:text-white hover:bg-black'>Add to cart</button>
          </article>
        ))}
  
      </section>
     
    </div>
  )
}

export default Items