import React, { useEffect, useState } from "react";
// import { Button, Label, Modal, TextInput, Textarea } from "flowbite-react";
import { deleteProduct, updateProduct } from "../../api";
import {  useNavigate } from "react-router-dom";

const AdminProductCard = ({ product }) => {
  
  const navigate = useNavigate();
  const { image, name, description, price,stocks } = product;
  const [uname,setUname] = useState(name);
  const [uprice,setUprice] = useState(price);
  const [udesc,setUdesc] = useState(description);
  const [stock,setStock] = useState(stocks);
   
  const  Uname = product.name  ;
  const  Udescription  =  product.description ;
  const  Uprice  =  product.price ;
  const pid = product._id ;

  const deleteOneProduct = () => {
    const body = {pid};
    deleteProduct(body);
    window.location.reload();
  };


  const updateOneProduct =()=>{
    const body = {pid,uname,uprice,udesc,image,stock}
    console.log(body)
    updateProduct(body);
    window.location.reload();
  }
  // const [modelShow, updateModelShow] = useState(false);

  return (
    <div className="rounded-2xl overflow-hidden  shadow-xl tranform hover:scale-110 duration-100">
      <div className="w-full h-72">
        <img
          src={`${image}`}
          alt={`${image}`}
          className="w-full h-full object-contain	"
        />
      </div>
      <div className="flex flex-col items-center my-2 py-2">
        <span className="font-body text-slate-500 block font-bold text-xl">
         {/* <input defaultValue={name} value={uname} onChange={(e)=>setUname(e.target.value)}/> */}
         {name}
        </span>
        <center>
          <span className="font-body text-slate-500 block my-3 ">
            {Udescription}
              {/* <input defaultValue={name} value={uname} onChange={(e)=>setUname(e.target.value)}/> */}
          </span>
        </center>
        <center>
          <span className="font-body text-slate-500 block my-3">
            Stocks: <span className="text-black"> <input type="number" value={stock} defaultValue={stocks} onChange={(e)=>setStock(e.target.value)} /></span>
          </span>

        </center>
        <span className="font-body text-slate-500">Price: ₹<input type="number" value={uprice} defaultValue={price} onChange={(e)=>setUprice(e.target.value)}/></span>
        <div className="flex justify-between w-1/2">
          <button
            className="bg-black hover:bg-lblue hover:text-black text-bblue font-bold py-2 px-4 my-3 rounded-full"
            onClick={updateOneProduct}
          >
            Update{" "}
          </button>
          <button
            className="bg-black hover:bg-lblue hover:text-black text-bblue font-bold py-2 px-4 my-3 rounded-full"
            onClick={deleteOneProduct}
          >
            Delete{" "}
          </button>

    
        </div>
      </div>
    </div>
  );
};

export default AdminProductCard;
