const Product = require('../model/productModel');
var nodemailer = require('nodemailer');
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shwethachandran06@gmail.com',
        pass: 'eddgqauvujenfaag'
    }
});

var mailOptions = {
    from: 'shwethachandran06@gmail.com',
    to: 'shwethachandran06@gmail.com',
    subject: 'Alert !! Stocks are getting low !!',
    text: 'Please update the product'   
};



exports.CreateProduct = async (req, res) => {
    console.log(req.body)
    const { image, name, description, price, pid, stocks } = req.body;

    const product = new Product({
        image,
        name,
        pid,
        description,
        price,
        stocks

    })
    product.save();
    res.send({ message: "Successfull Register" })
}


exports.ListProduct = async (req, res) => {
    const data = await Product.find({});
    if (data) {
        console.log(data);
        res.send(data);
        for (x in data) {
            console.log(data[x].stocks);
            if (data[x].stocks < 5) {
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        // console.log(mailOptions);
                        // console.log("se");
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                break;
            }
        }

    } else {
        res.send(err);
    }
}


exports.DeleteProduct = async (req, res) => {
    try {
        console.log(req.body)


        await Product.findByIdAndDelete(req.body.pid);
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


exports.UpdateProduct = async (req, res) => {
    try {
        const { uname: name, uprice: price, udesc: description, image, stock: stocks } = req.body;
        const value = { name, price, description, image, stocks };
        console.log(value)
        await Product.findByIdAndUpdate(req.body.pid, value);
        res.status(200).json({
            msg: 'updated'
        })
    } catch (err) {
        res.status(500).json({
            msg: 'Server internal error'
        })
    }
}

exports.UpdateStock = async (req, res) => {
    try {
        const {  name,  price, description, image, bal: stocks,pid} = req.body;
        const value = { name, price, description, image, stocks, pid}; //image,name,description,price,pid,bal,id
        console.log(value);
        console.log(req.body._id);
        await Product.findByIdAndUpdate(req.body._id, value);
        res.status(200).json({
            msg: 'updated'
        })
    } catch (err) {
        res.status(500).json({
            msg: 'Server internal error'
        })
    }
}