const express = require("express")
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const cors = require("cors")
app.use(cors())

// connecting with mongodb

const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
const {  SignUp, Login, ListUser, ListMyUser } = require("./controllers/user");
const {  ListProduct, UpdateProduct, DeleteProduct, CreateProduct, UpdateStock } = require("./controllers/product");
const { ListAllOrder, ListMyOrder, ListMycart, AddOrder, PlaceOrder, RemoveProduct } = require("./controllers/order");
const { CreateOrder, ListMyOrders, OrderList } = require("./controllers/orderedProducts");
mongoose.connect("mongodb+srv://shwethachandran:saha@cluster0.u2ae1kb.mongodb.net/sahadb?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connection Successfull")
}).catch((err) => {
    console.log(err)
})

// sign up API
app.post("/signup",SignUp)//checked

//Login API
app.post("/login",Login);//checked

// Get all user 

app.get("/admin/listuser",ListUser);//checked

// Add Products
app.post("/addproducts", CreateProduct);//checked

//list product
app.get("/listproducts", ListProduct);//checked

//Add to cart

app.post("/addtocart",AddOrder );//result came but not added to cart

//List all products

app.get("/mycart", ListProduct);//checked

//update product

app.put("/product/updateone",UpdateProduct);//checked

app.put("/product/updatestock",UpdateStock);
// delete product 

app.delete("/product/deleteone",DeleteProduct);//checked

// Order products

app.get("/admin/listorder",OrderList);//checked

app.get("/admin/listallorders",OrderList);

app.post("/user/listmycart",ListMycart); //checked 

app.put("/user/placeorder",PlaceOrder); //checked

app.post("/user/listmyorder",ListMyOrders); // checked

app.post("/addtoorder", CreateOrder);//checked

app.post("/user/listmyuser",ListMyUser);


app.delete("/cart/removeone",RemoveProduct);//checked
// const verifyJwt = (req,res,next) =>{
//     const token = req.headers["access-token"];
//     if(!token){
//         return res.json("We need token please provide it for next time")
//     }else{
//         jwt.verify(token,"jwtSecretKey",(err,decoded)=>{
//             if(err){
//                 res.json("Not Authenticated");
//             }else{
//                 res.userId = decoded.id;
//                 next();
//             }
//         })
//     }
// }




/// localstorage.setItem("token",res.data.token);
/// headers: {'access-token': localStorage.getItem("token");} // app.get 
app.listen(8080, () => {
    console.log("Server is runing at port 8080")
})


// jwt.sign({ id }, "jwtwebtoken", { expiresIn: 300 })

// return res.json({Login:true, token,data});

