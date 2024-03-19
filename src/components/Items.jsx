import React, { useState, useEffect } from 'react';
import { Information } from './Information.jsx';
import { Link } from 'react-router-dom';
import Cart from './Cart.jsx';

const Items = () => {
  const [result, setResult] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log( data);
        setResult(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  

  const addToCart = (index) => {
    const newItem = result[index];
    setCart([...cart, newItem]);
    setCartItems([...cartItems, newItem]);
  };

  return (
    <div className=' overflow-hidden h-full pt-[15vh]  bg-slate-200 flex-col gap-10 flex items-center justify-center'>
      <section className='  place-items-center w-sceen bg-slate-200 gap-3 grid grid-cols-4 p-10 grid-rows-2 max-sm:grid-cols-2 max-sm:px-2 max-md:grid-cols-3 max-md:px-1'>
        {cart.length === 0 ? (
          <Link
            to={'/cart'}
            className='absolute mt-5 border top-[4rem] border-black p-2 hover:bg-black hover:text-white text-black bg-transparent right-10 max-sm:right-3 w-15 duration-150 hover:cursor-pointer flex items-center justify-center'>
            Cart
          </Link>
        ) : (
          <Link
            to={`/cart`}
            className='absolute mt-5 border-2 border-black p-2 hover:bg-black hover:text-white after:top-[10px] after:left-2 after:contents-[""] after:h-2 after:w-2 hover:cursor-pointer top-[15px]  after:bg-red-500 after:rounded-full after:absolute text-black bg-transparent right-10 max-sm:right-3 w-15 duration-150 flex items-center justify-center '>
            Cart
          </Link>
        )}
        {result === null ? (
          <div className='h-screen w-screen bg-slate-200'>Fetching items...</div>
        ) : (
          result.products.map((item, index) => (
            <article key={index} className=' border-2 border-spacing-10 border-black flex items-center justify-center flex-col relative overflow-hidden min-h-[45vh] w-full hover:scale-[1.02] duration-150 bg-transparent'>
              <h3 className='bg-white rounded-t-lg h-[3rem] flex items-center justify-center text-center w-full'>{item.title}</h3>
              <section className='relative overflow-hidden place-content-center max-h-[50vh] w-full bg-white'>
                <img className='border-2 border-y-black h-[30vh] bg-white min-w-[100%]' src={item.images[1]} alt="Image not found" />
              </section>
              <section className='bg-white overflow-hidden text-center h-[20vh] w-full rounded-b-lg'>
                {item.description.length > 60 ? item.description.slice(0, 100).concat('...') : item.description}
              </section>
              <section className='w-full bg-white h-16 flex items-center justify-center'>
                <button onClick={() => addToCart(index)} className='absolute border-2 border-black p-2 capitalize hover:-translate-y-1 duration-150 rounded-md hover:text-white hover:bg-black'>
                  Add to cart
                </button>
              </section>
            </article>
          ))
        )}
      </section>
    </div>
  );
};

export default Items;
