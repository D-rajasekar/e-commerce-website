import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [name,setName] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate();
    const onAdminLogin = () =>{
        if(name=='iamadmin'&&password=='showmydesk'){
            navigate("/admin")
        }
    }
    return (
        <>
      <div>
            <h1 className="mt-7">Welcome to Admin Page !</h1>
        </div>
        <div class="flex  justify-center mt-7">
            <div class="w-full max-w-xs">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Username
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email" onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                    <br />

                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={(e) => setPassword(e.target.value)} value={password} />
                        {/* <p class="text-red-500 text-xs italic">Please enter a password.</p> */}
                    </div>
                    <br />
                    <div class="w-full justify-center px-3 mb-6 md:mb-0 ">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " type="button" onClick={onAdminLogin}>
                            SignIn
                        </button>

                    </div>


                </form>
          
            </div>
        </div>
        
        
        </>
    )
}
export default AdminLogin;
