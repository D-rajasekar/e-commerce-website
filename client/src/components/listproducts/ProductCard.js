import React, { useEffect, useState } from 'react'
import { addOrder, updatestock } from '../../api';
import { Button, Label, Modal, TextInput } from 'flowbite-react';

const ProductCard = ({ product }) => {
  const { image, name, description, price, pid, _id,stocks} = product
  const [modelShow, updateModelShow] = useState(false);
  const [quantity,setQuantity] = useState(1);

  const AddToCart = async () => {
    updateModelShow(!modelShow);
    
    // alert(id);

    var uid = localStorage.getItem("uid");
    const body = { image, name, description, price,uid,pid,quantity};
    // alert(quantity)
    const val = addOrder(body);
    const bal = stocks-quantity;
    const values = {image,name,description,price,pid,bal,_id}
   const res = updatestock(values);
    // try {
     
    //   console.log(body);
    //   const res = await fetch("http://localhost:8080/addtocart", {
    //     method: "POST",
    //     headers: { "content-Type": "application/json" },
    //     body: JSON.stringify(body)
    //   });
    //   const jsonData = await res.json();
    //   console.log(jsonData)
    //   alert("Successfully added to the cart!")

    // } catch (err) {
    //   console.e rror(err.message);
    // }
  }
 



  return (
    <div className='rounded-2xl overflow-hidden  shadow-xl tranform hover:scale-110 duration-100'>
      <div className='w-full h-72'>
        <img src={`${image}`} alt={`${image}`}
          className='w-full h-full object-contain	' />
      </div>
      <div className='flex flex-col items-center my-2 py-2'>
        <span className='font-body text-slate-500 block font-bold text-xl'>{name}</span>
        <center><span className='font-body text-slate-500 block my-3'>{description}</span></center>
        <span className='font-body text-slate-500'>₹{price}</span>
        <span className='font-body text-slate-500'>Stocks remaining :  {stocks>5?stocks:<span style={{color:"red"}}>Out of stock</span>}</span>
        {stocks>5?<button className='bg-black hover:bg-lblue hover:text-black text-bblue font-bold py-2 px-4 my-3 rounded-full' onClick={()=>updateModelShow(!modelShow)}>Add to Cart </button>:<span></span>}
      </div>
      <>
            <Modal
              show={modelShow}
              size="lg"
              popup={true}
              onClose={() => {
                updateModelShow(!modelShow);
              }}
            >
              <Modal.Header />
              <Modal.Body>
                <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Enter the Quantity 
                  </h3>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email" value="Product Count"  />
                    </div>
                    <TextInput
                      type="number"
                      id="price"
                       value={quantity}  min={1} max={5}
                       onChange={(e) => setQuantity(e.target.value)} 
                    />
                  </div>
                
                  <div className="flex justify-center">
                    <Button onClick={AddToCart}>Submit</Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
            </>
    </div>
    
  )
}

export default ProductCard