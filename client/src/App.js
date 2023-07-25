import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import NavBar from "./components/navbar/Navbar.js";
import Login from "./components/login/login.js";
import Register from "./components/login/register.js";

import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";
import { UserContext } from "./components/protectedRoutes/UserContext";
import { useState } from "react";
import DashBoard from "./components/home/dashboard";
import MyFooter from "./components/footer/footer";

import Footer from "./components/footer/footer";
import Filters from "./components/listproducts/Filters";

import AddProduct from "./pages/admin/AddProduct";
import MyCart from "./components/listproducts/MyCart";
import Contact from "./components/contact/Contact";
import { Checkout } from "./components/checkout/Checkout";
import AdminNavBar from "./components/navbar/AdminNavbar";
import AdminFilters from "./pages/admin/AdminFilters";
import Userlist from "./pages/admin/UserList";
import Orderlist from "./pages/admin/OrderList";
import MyOrders from "./components/myorders/MyOrders";
import UserProfile from "./components/userprofile/userProfile";
import AdminLogin from "./components/adminLogin/Admin";
function App() {

  const [user, setUser] = useState("");
  // const [userid ,setUserId] = useState(0); const { user } = useContext(UserContext);
  return (
    <div className="App">
      <HashRouter>
        <UserContext.Provider value={{ user, setUser }}  >
          <Routes>

            <Route path="/" element={
              <div>
                <NavBar />
                <DashBoard />
                <MyFooter />
              </div>
            } />
            <Route element={<ProtectedRoutes />}>
              <Route path="/contact" element={
                <div>
                  <NavBar />
                  <Contact />
                  <MyFooter />
                </div>
              } />
            </Route>
            <Route
              path="/productlist"

              element={
                <div>
                  <NavBar />
                  {/* <ProductList /> */}
                  <Filters />
                  {/* <Items /> */}
                  <MyFooter />
                </div>
              }
            />


            <Route path="/admin" element={
              <div>
                <AdminNavBar />
                <AddProduct />
                <Footer />
              </div>
            } />


            {/* <Route element={<ProtectedRoutes />}>
              <Route path="/login" element={
                <div>
                  <NavBar />
                  <UserProfile />
                </div>
              } />
            </Route> */}
            {/* <Route element={<ProtectedRoutes />}> */}
              <Route path="/register" element={
                <div>
                  <NavBar />
                  <Register />
                </div>
              } />
            {/* </Route> */}
            {/* <Route element={<ProtectedRoutes />}> */}
            <Route path="/login" element={
              <div>
                <NavBar />
                <Login />
              </div>
            } />
            {/* </Route> */}
            {/* <Route element={<ProtectedRoutes />}>
              <Route path="/description" element={
                <div>

                  <NavBar />
                  <Description />
                </div>
              } />
            </Route> */}

            <Route element={<ProtectedRoutes />}>
              <Route path="/cart" element={
                <div>
                  <NavBar />
                  <MyCart />
                  <Footer />
                </div>
              } />
            </Route>
            <Route element={<ProtectedRoutes />}>
              <Route path="/myorders" element={
                <div>
                  <NavBar />
                  <MyOrders />
                  <Footer />
                </div>
              } />
            </Route>
           
              <Route path="/adminproduct" element={
                <div>
                  <AdminNavBar />
                  <AdminFilters />

                  <Footer />
                </div>
              } />
           

            <Route path="/usersList" element={
              <div>
                <AdminNavBar />
                <Userlist />
                <Footer />
              </div>
            } />
            <Route path="/orderList" element={
              <div>
                <AdminNavBar />
                <Orderlist />
                <Footer />
              </div>
            } />
                <Route path="/adminlogin" element={
              <div>
                <AdminNavBar />
                <AdminLogin/>
                <Footer />
              </div>
            } />
          </Routes>
        </UserContext.Provider>
      </HashRouter>
    </div>
  );
}

export default App;
