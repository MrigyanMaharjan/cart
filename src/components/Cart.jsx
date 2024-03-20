import React from 'react'
import { useContext } from 'react'
import { Itemscontext } from '../context/cartcontext'
const Cart = () => {

  const item=useContext(Itemscontext);
  console.log(item)
  return (
    <div className=' flex items-center justify-center flex-col w-screen bg-white'>
      <section className='mt-[10vh] text-black bg-zinc-300 w-screen h-[88vh] flex items-center justify-start pt-10 flex-col'>
        <p className='w-screen mb-4 h-10 text-center text-2xl uppercase'>This is your cart</p>
        <section>
    {item.map((item)=>(
 <article className='bg-red-300 h-[15vh] hover:cursor-pointer w-[90vw] hover:scale-[1.02] duration-150 border-b-2 border-slate-300'>{item.title}</article>
   ))}
         
        </section>
        
        </section>
    </div>
  )
}

export default Cart