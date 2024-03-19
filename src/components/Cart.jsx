import React from 'react'

const Cart = () => {

  return (
    <div className=' flex items-center justify-center flex-col w-screen bg-white'>
      <section className='mt-[10vh] text-black bg-zinc-300 w-screen h-[88vh] flex items-center justify-start pt-10 flex-col'>
        <p className='w-screen mb-4 h-10 text-center text-2xl uppercase'>This is your cart</p>
        <section>
          <article  className='bg-red-300 h-[15vh] hover:cursor-pointer w-[90vw] hover:scale-[1.02] duration-150 border-b-2 border-slate-300'></article>
          <article className='bg-red-300 h-[15vh] hover:cursor-pointer w-[90vw] hover:scale-[1.02] duration-150 border-b-2 border-slate-300'></article>
          <article className='bg-red-300 h-[15vh] hover:cursor-pointer w-[90vw] hover:scale-[1.02] duration-150 border-b-2 border-slate-300'></article>
          <article className='bg-red-300 h-[15vh] hover:cursor-pointer w-[90vw] hover:scale-[1.02] duration-150 border-b-2 border-slate-300'></article>
        </section>
        
        </section>
    </div>
  )
}

export default Cart