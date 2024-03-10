import React, { useState } from 'react'
import { Information } from './Information.jsx'




const Items = () => {


  const addtocart = (items) => {
    console.log(items.target.id);
    setCart([...cart, items.target.id]);
    console.log(cart)
  }
 const increase=()=>{
  setCount(prevCount => prevCount + 1)
 }
 const decrease=()=>{
  setCount(prevCount => prevCount - 1);
 }


  return (
    <div className='overflow-hidden   h-[160vh] w-screen flex items-center justify-center pt-[4rem] '>
  

      <section className='h-full place-items-center w-screen bg-slate-200 gap-3 grid grid-cols-4 p-10 grid-rows-2 '>
        {Information.map((items, index) => (
          <article key={index} className=' border-2 border-spacing-10 border-black  relative overflow-hidden  max-h-[50vh] w-[18vw] rounded-lg hover:scale-[1.02] duration-150 bg-transparent'>
            <h3 className='bg-red-100 rounded-t-lg h-[3rem] flex items-center justify-center text-center'>{items.product}</h3>
            <section className=' relative overflow-hidden place-content-center max-h-[50vh] w-[18vw bg-transparent'>
              <img className=' max-h-[30vh] min-w-[100%]' src={items.image} alt="" srcset="" />
            </section>
            <section className='bg-white text-center h-[20vh] rounded-b-lg'>
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