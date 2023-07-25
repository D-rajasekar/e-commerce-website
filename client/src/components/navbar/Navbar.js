import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/company_logo.png'

const NavBar = () => {
    console.log(localStorage.uid)
    const navigate = useNavigate();

    const [nav, setNav] = useState(false)
    const [uid,setUid] = useState(localStorage.uid)
    console.log(uid)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="flex justify-between items-center flex-wrap h-42 relative text-bblue bg-black">
            <img className=" ml-5" alt="kec logo" style={{ width: "calc(100%*0.09)" }} src={logo} ></img>
            <div className="text-dark flex justify-between items-center h-24 w-4/5 max-w-[1240px] ">

                <Link to="/"><h1 className="w-full text-2xl md:text-4xl  font-bold font-poppins tracking-wide text-white "> Sri Amman Home Appliances </h1></Link>

                <ul className="hidden md:flex ">
                    <li className="px-3 text-lg"><Link to="/">Home</Link></li>
                    <li className="px-3 text-lg"><Link to="/productlist">Products</Link></li>
                    <li className="px-3 text-lg"><Link to="/contact">Request us</Link></li>
                    <li className="px-3 text-lg"><Link to="/cart">My cart</Link></li>
                    <li className="px-3 text-lg"><Link to="/myorders">My Orders</Link></li>

                    {uid!=null? <div><li className="px-3 text-lg"> <button onClick={() => {localStorage.setItem("uid",""); setUid(null); navigate("/login")}} >Sign Out</button> </li> </div>: <li className="px-3 text-lg"><Link to="/login">Login/register</Link></li>}
                </ul>
                <div onClick={handleNav} className='block md:hidden '>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

                </div>
                <div className={nav ? 'z-10 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 text-bblue' : 'fixed left-[-100%]'}>
                    <h1 className="w-full text-2xl font-bold  m-2 font-poppins "> Sri Amman Home Appliances </h1>
                    <ul className="uppercase p-4">
                        <li className="p-4 border-b border-gray-600"><Link to="/home">Home</Link></li>
                        <li className="p-4 border-b border-gray-600"><Link to="/productlist">Products</Link></li>

                        <li className="p-4 border-b border-gray-600"><Link to="/cart">My cart</Link></li>
                        <li className="p-4 border-b border-gray-600"><Link to="/">Request us</Link></li>
                        <li className="p-4 border-b border-gray-600"><Link to="/login">Login/register</Link></li>

                    </ul>
                </div>
            </div>
            {/* <img className="mr-5" alt="club logo" style={{width:"calc(100%*0.09)"}} src = {logo}></img> */}
        </div>
    )
}

export default NavBar;