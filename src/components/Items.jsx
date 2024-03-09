import React, { useState } from 'react'
import { Information } from './Information.jsx'


const Items = () => {

  const [cart, setCart] = useState("");
const [count,setCount]=useState(0)


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
    <div className='overflow-x-hidden '>
      <section className='min-h-[130vh] w-screen bg-slate-500  gap-3 grid grid-cols-5 p-10 grid-rows-2'>
        {Information.map((items, index) => (
          <article key={index} className=' relative overflow-hidden place-content-center max-h-[50vh] w-[18vw] rounded-lg hover:scale-[1.02] duration-150 bg-transparent'>
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
      <section className='h-[100vh] w-screen bg-slate-600 flex items-center p-10 justify-start'>
        {cart ?
          <div className=' h-[120%] w-screen grid grid-cols-3 grid-rows-3 gap-3 p-3'>
            
            {cart.map((items,index)=>(
          <section className='h-full mt-10 w-full bg-red-400  '>
            <section className=' bg-blue-200 text-center '>{cart[index]}</section>
            <div className='bg-red-300 h-[90%] flex items-center justify-center'>
              <section className='bg-yellow-300 h-[100%] w-[50%]'><img src="" alt=""  /></section>
              <section className='bg-green-300 h-[100%] w-[50%] flex-col flex items-center justify-center'>
    
                <input value={count} type="number" readOnly />
                <div className=' w-[100%] p-2 flex gap-2 justify-center items-center'>

                 <button onClick={increase} className='border-2 flex items-center justify-center hover:bg-slate-100 duration-150 p-2 rounded-xl h-[2rem] w-[3rem] text-center bg-blue-300'>+</button>
               <button onClick={decrease} className='border-2 flex items-center justify-center hover:bg-slate-100 duration-150 p-2 rounded-xl h-[2rem] w-[3rem] text-center bg-blue-300'>-</button>
               </div>
              </section>
         

            </div>
            </section>

       
        ))}  
          </div>
          :
          <article className=' relative overflow-hidden place-content-center max-h-[50vh] w-[90vw] rounded-lg duration-150 bg-transparent'>
            <h3 className='bg-red-100 rounded-t-lg h-[3rem] flex items-center justify-center text-black text-center'>cart is empty</h3>
            <section className=' relative overflow-hidden place-content-center max-h-[50vh] w-[18vw bg-transparent'>
            </section>
            <section className='bg-white text-center h-[20vh] rounded-b-lg'>


            </section>

          </article>
        }
      </section>

    </div>
  )
}

export default Items