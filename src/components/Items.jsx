import React from 'react'
import { Information } from './Information.jsx'


const Items = () => {
  return (
    <div className='overflow-x-hidden '>
        <section className='min-h-[130vh] w-screen bg-slate-500  gap-3 grid grid-cols-5 p-10 grid-rows-2'>
        {Information.map((items,index)=>(
            <article className=' relative overflow-hidden place-content-center max-h-[50vh] w-[18vw] rounded-lg hover:scale-[1.03] duration-150 bg-transparent'>
                <h3 className='bg-red-100 rounded-t-lg h-[3rem] flex items-center justify-center text-center'>{items.product}</h3>
                <section className=' relative overflow-hidden place-content-center max-h-[50vh] w-[18vw bg-transparent'>
                  <img className=' max-h-[30vh] min-w-[100%]' src={items.image} alt="" srcset="" />
                </section>
                <section className='bg-white text-center h-[20vh] rounded-b-lg'>
                  {items.description}
                </section>  

            </article>
        ))}
        </section>
        <section className='h-[20vh] w-screen bg-slate-600'>
            This is cart
        </section>

    </div>
  )
}

export default Items