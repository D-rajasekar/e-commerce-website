import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';



const Filters = () => {
  const [pid, setPid] = useState(1);
  const [products, setProducts] = useState([]);


  const onListProducts = async () => {
   
    try {
      const response = await fetch("http://localhost:8080/listproducts");
      console.log(response);
      if (response) {
        const res = await response.json();
        console.log(res);
        setProducts(res);
      }

    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    onListProducts()
  }, []); 


  return (
    <>
    <div className='overflow-x-scroll container mx-auto px-4 ' >
      <section className="my-10 py-3 w-2/3 md:w-4/6 mx-auto flex flex-col md:flex-row justify-center">
        <button className="btnStyle bg-black text-bblue" onClick={() => setPid(1)}>Refrigerator</button>

        <button className="btnStyle  bg-black text-bblue" onClick={() => setPid(2)}> Washing Machine</button >
        <button className="btnStyle bg-black text-bblue" onClick={() => setPid(3)}>Grinder</button>
      </section>
      </div>
      <section className='w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 my-10 py-10'>
        {
          products.filter(product => product.pid == pid).map((filterproduct) => {
            return <ProductCard key={filterproduct.id} product={filterproduct} />
          })
        }
      </section >
      <br/>
      <br/>
    </>
  );


}

export default Filters