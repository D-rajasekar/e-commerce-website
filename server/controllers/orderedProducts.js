
const Ordered = require('../model/OrderedModel');

exports.CreateOrder = async (req, res) => {
    console.log(req.body)
    const {uid,firstname,lastname,email,phoneno:phone,streetname,city,state,pincode,total:amount,date,OrderedProducts } = req.body;
    const address = firstname+" "+lastname+" "+streetname+" "+city+" "+state+" "+pincode;
    console.log(address);
    const name = firstname
    const order =  new Ordered({
        date,
        uid,
        amount,
        email,
        name,
        address,
        phone,
        OrderedProducts
    })
    await order.save();
    res.send({ message: "Successfull Register" })
}


// exports.ListMyOrders= async (req, res) => {
//     console.log(req);
    
//     console.log("--->uid"+req.body.uid);
//     const data = await Ordered.findById(req.body.uid);
//     if (data) {
//         console.log(data);
//         res.send(data);
//     } else {
//         res.send(err);
//     }
// }


exports.OrderList=async(req,res)=>{
    try {
        const expense = await Ordered.find();
        // console.log(expenses);
        return res.status(200).json({
            data: expense,
            length: expense.length
        })
    } catch (error) {
        return res.send(error);
    }
}


exports.ListMyOrders = async (req, res) => {
    console.log(req.body);
    const uid = req.body.uid;
    console.log("uid"+uid);
    const data = await Ordered.find(
        {uid: req.body.uid},
    );
    if (data) {
        console.log(data);
        res.send(data);
    } else {
        res.send(err);
    }
}