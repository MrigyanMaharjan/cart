import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { Itemscontext } from '../context/cartcontext';

const Cart = () => {
  const [balance, setBalance] = useState(10000);
  const [total, setTotal] = useState(0); // Initialize total with 0
  const items = useContext(Itemscontext);

  useEffect(() => {
    // Calculate total price whenever items change
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.price;
    });
    setTotal(totalPrice);
  }, [items]);

  return (
    <div className='flex items-center justify-center flex-col w-screen h-[100%]'>
      <p className='w-screen h-[22vh] flex items-end justify-center text-2xl bg-zinc-300 uppercase'>
        This is your cart
      </p>
      <section className='text-black bg-zinc-300 w-screen min-h-[100vh] flex items-start justify-start pt-10 pl-10 gap-10'>
        <section className='flex flex-col gap-2'>
          {items.map((item, index) => (
            <article
              key={index}
              className='bg-white h-[15vh] hover:cursor-pointer flex items-center justify-start w-[50vw] hover:scale-[1.02] duration-150 border-b-2 border-slate-300 py-2'>
              <div className='bg-white h-[15vh] hover:cursor-pointer flex items-center justify-start w-[50vw] hover:scale-[1.02] duration-150 border-b-2 border-slate-300'>
                <img
                  className='aspect-square h-[15vh] border-[1px] border-x-black'
                  src={item.images[2]}
                  alt='notfound'
                />
                <section className='bg-white pl-2 font-sans font-semibold text-lg h-full flex flex-col w-1/2'>
                  <p> Product: {item.title}</p>
                  <p className='text-md font-normal'>
                    {' '}
                    Price: ${item.price}
                    <span className='pl-10'>stock: {item.stock}</span>
                  </p>
                </section>
              </div>
            </article>
          ))}
        </section>
        <div className='fixed  right-0  flex items-center justify-end h-[65vh] w-1/2 '>
          <section className='bg-red-300 px-2 h-[100%] w-[90%]'>
            <section className='h-[5vh] border-b-2 border-gray flex items-center justify-left text-md font-medium '>
              Your balance is currently ${balance}
            </section>
            <section className='h-[40vh] border-b-2 border-gray flex items-center justify-left'>
              This is where calculations will be done
            </section>
            <section className='h-[10vh] border-b-2 border-gray flex items-center justify-left'>
              Your total is ${total}
            </section>
            <button className='border-2 border-gray p-2 mt-2 hover:scale-105 duration-100 hover:bg-white hover:text-black'>
              confirm purchase
            </button>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Cart;
