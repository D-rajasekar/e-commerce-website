const Order = require('../model/OrderModel');

exports.AddOrder = async (req, res) => {
    console.log(req.body)
    const { image, uid, cid, pid, name, description, price,success,quantity } = req.body;

    const addToCart = new Order({
        image,
        uid,
        cid,
        pid,
        name,
        description,
        price,
        success,
        quantity
    })
    addToCart.save();
    res.send({ message: "Successfull added to cart" })
}


exports.ListMycart = async (req, res) => {
    console.log(req);
    const uid = req.body.uid;
    console.log("--->uid"+uid);
    const data = await Order.find({
        "uid":  uid,
        "placeorder" :false
    });
    if (data) {
        console.log(data);
        res.send(data);
    } else {
        res.send(err);
    }
}

exports.ListAllOrder = async (req,res)=>{
    try {
        const expense = await Order.find();
        // console.log(expenses);
        return res.status(200).json({
            data: expense,
            length: expense.length
        })
    } catch (error) {
        return res.send(error);
    }
}

// exports.ListMyOrder = async (req, res) => {
//     console.log(req.body);
//     const uid = req.body.uid;
//     console.log("uid"+uid);
//     const data = await Order.find(
//         {uid: req.body.uid},
//         {placeorder : true}
//     );
//     if (data) {
//         console.log(data);
//         res.send(data);
//     } else {
//         res.send(err);
//     }
// }





exports.PlaceOrder = async(req,res)=>{
    try {
        const myquery = req.body.uid;
        console.log(myquery);
         
        await Order.updateMany( {uid:req.body.uid} , {$set:{placeorder:true}});
        res.status(200).json({
            msg: 'updated'
        })
    } catch (err) {
        res.status(500).json({
            msg: 'Server internal error'
        })
    }
}

exports.RemoveProduct = async (req, res) => {
    try {
        console.log(req.body._id)
        await Order.findByIdAndDelete(req.body._id);
        res.status(200).json({
            msg: 'deleted'
        })
        console.log("deleted");
    } catch (err) {
        res.status(500).json({
            msg: 'server internal error'
        })
    }
}
