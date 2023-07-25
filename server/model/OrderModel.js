const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    date:{
        type: String,
    },
    uid: {
        type: String,
        required: true,
    },
    cid: {
        type: String,
    },
    pid: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: true,
    },
    price: {
        type: Number,
        required: 0,
    },
    placeorder:{
        type:Boolean,
        default: false
    },
    quantity:{
        type:Number,
        default:1
    }

});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;