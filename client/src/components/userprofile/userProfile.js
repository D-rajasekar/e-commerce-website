import React, { useEffect, useState } from 'react'
import { listMyUser } from '../../api';

export default function UserProfile() {
    const [efirstname, setFirstname] = useState('');
    const [elastname, setLastname] = useState('');
    const [eemail, setEmail] = useState('');
    const [ephoneno, setPhoneno] = useState('');
    const [epassword, setPassword] = useState('');
    const [estreetname, setStreetname] = useState('');
    const [ecity, setCity] = useState('');
    const [estate, setState] = useState('Tamil Nadu');
    const [epincode, setPincode] = useState('');

    const [myuser, setMyUser] = useState();
    var uid =  localStorage.getItem("uid");
    function handleAddrTypeChange(e) {
        setState(e.target.value);
      }
    useEffect(()=>{
        const body = {uid};
        listMyUser(setMyUser,body);
    //    await add();
    },[])
    // const add =()=>{
        
    //     console.log(myuser.data.city)
        
    //     const {firstname,lastname,email,phoneno,password,streetname,city,state,pincode} = myuser.data;
    //     setFirstname(firstname);
    // }
  
    
  return (
    <div>
            <div class="flex h-screen justify-center mt-8">
            <form class="w-full max-w-lg" >
                <div class="flex flex-wrap -mx-3 mb-6" >
               
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input class=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" name="fname" type="text" onChange={(e) => setFirstname(e.target.value)} value={efirstname} placeholder="Raj" required />
                     
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Last Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="lname" name="lname" type="text" onChange={(e) => setLastname(e.target.value)} value={elastname} placeholder="Kumar" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6" >
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Email
                        </label>
                        <input class="  appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" name="email" type="email" onChange={(e) => setEmail(e.target.value)} value={eemail} placeholder="abc123@gmail.com" required />
                     
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class=" peer block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Phone No
                        </label>
                        <input pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" class="peer appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="ph" name="ph" type="text" onChange={(e) => setPhoneno(e.target.value)} value={ephoneno} placeholder="9876543210" required/>
                    
                    </div>
                </div>
       
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Password
                        </label>
                        <input class="peer-focus:font-medium appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="password" name="password" onChange={(e) => setPassword(e.target.value)} value={epassword} type="password" placeholder="******************" required />
                        {/* <p class="invisible peer-invalid:visible text-red-700 font-light">
                Please enter a strong password
            </p> */}
                    </div>
                </div>
            
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Door no & street name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="sname" name="sname" type="text" onChange={(e) => setStreetname(e.target.value)} value={estreetname} placeholder="2/12,periyar street" required/>

                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            City
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="city" name="city" type="text" onChange={(e) => setCity(e.target.value)} value={ecity} placeholder="Chennai" required />
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                            State
                        </label>
                        <div class="relative">
                            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="state" name="state" defaultValue={estate}
  onChange={handleAddrTypeChange}  required >
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Lakshadweep">Lakshadweep</option>
                                <option value="Puducherry">Puducherry</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Pincode
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="pincode" name="pincode" type="text" onChange={(e) => setPincode(e.target.value)} value={epincode} placeholder="6380056" />
                    </div>
                </div>
                <br />
                <div class="w-full justify-center px-3 mb-6 md:mb-0 ">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"  >
                        Register
                    </button>

                </div>
            </form>

      
        </div>
    </div>
  )
}
