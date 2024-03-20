import React, { useState, useEffect } from "react";
import Cartcontext from "./cartcontext";
import { Itemscontext } from "./cartcontext";

const Itemstate=(props)=>{
    const [cart,setCart] =useState([])

    return (
        <Itemscontext.Provider value={cart}>
          {props.children}
        </Itemscontext.Provider>
      );

}




const Cartstate = (props) => {
  const [data, setData] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const fetchedData = await response.json();
        setData(fetchedData);

      } catch (error) {
        console.error('Error fetching data:', error.message);
      }


    };
    fetchData();
    
  }, []); 

  return (
    <Cartcontext.Provider value={data}>
      {props.children}
    </Cartcontext.Provider>
  );
};

export default Cartstate;
export {Itemstate}
