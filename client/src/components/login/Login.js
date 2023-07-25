import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../protectedRoutes/UserContext";



const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    console.log(localStorage.uid)
    const { user, setUser } = useContext(UserContext);
   
    const navigate = useNavigate();
    const onLogin = async (e) => {
        e.preventDefault();
        try {
            const body = { email, password };
            console.log(body);
            await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            .then((response) => response.json())
            .then(async (data) => {
                if(data.status=="success"){
                    localStorage.setItem("uid",data.data._id);
                    console.log(localStorage.uid)
                    if (data.data.email === 'naveenelango.se@gmail.com') {

                        navigate("/admin")
                    } else {
                    navigate("/")
                    await setUser(data.data.email);
                     }
                }
                else{
                    alert("Incorrect credintials");
                }

            });
            
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <>
            <div class="flex  justify-center mt-7">
                <div class="w-full max-w-xs">
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Username
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} />
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
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " type="button" onClick={onLogin}>
                                SignIn
                            </button>

                        </div>


                    </form>
                    <p class="text-center text-gray-500 text-xs">
                        &copy;If not Registered : <Link to="/register"><div style={{ color: 'red' }}>Register</div></Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login