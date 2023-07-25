import { useNavigate } from "react-router-dom";

export const getUserList = (setAllUser) => {
    fetch('http://localhost:8080/admin/listuser')
        .then((response) => response.json())
        .then((expense_data) => setAllUser(expense_data.data));
}
export const getProductList = (setAllProduct) => {
    fetch('http://localhost:8080/listproducts')
        .then((response) => response.json())
        .then((expense_data) => setAllProduct(expense_data.data));
}
export const getMyCart = (setMyCart) => {
    fetch('http://localhost:8080/mycart')
        .then((response) => response.json())
        .then((expense_data) => setMyCart(expense_data.data));
}
export const getAllOrders = (setAllOrders) => {
    fetch('http://localhost:8080/admin/listallorders')
        .then((response) => response.json())
        .then((expense_data) => {

            const Orders = expense_data.data.map(order => {
                let dateArray = order.date.split('.');
                return {...order,Date:new Date(dateArray[2]+'-'+dateArray[1]+'-'+dateArray[0])}
              })
            setAllOrders(Orders)
        });
}



export const addOrder = async (postData) => {
    console.log(postData);
    const res = await fetch("http://localhost:8080/addtocart", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(postData)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}

export const listMyCart = async (setMyCart, body) => {
    console.log(body);
    const res = await fetch("http://localhost:8080/user/listmycart", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return setMyCart(jsonData);
}

export const listMyUser = async (setMyUser, body) => {
    console.log(body);
    const res = await fetch("http://localhost:8080/user/listmyuser", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return setMyUser(jsonData);
}


export const listAllMyOrder = async (uid = {}, setMyOrder) => {
    console.log(uid);
    const body = {uid};
    const res = await fetch("http://localhost:8080/user/listmyorder", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return setMyOrder(jsonData);
}


export const deleteProduct = async (body) => {
    console.log(body);
    const res = await fetch("http://localhost:8080/product/deleteone", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    // const jsonData = await res.json();

    return res;
}

export const updateProduct = async (body = {}) => {
    console.log(body);
    const res = await fetch("http://localhost:8080/product/updateone", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}
export const updatestock = async (body = {}) => {
    console.log(body);
    const res = await fetch("http://localhost:8080/product/updatestock", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}


export const placeOrder = async(data = {}) =>{
    console.log(data);
    const {uid} = data
    const body = {uid};
    const res = await fetch("http://localhost:8080/user/placeorder", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}


export const addToOrder = async (postData) => {
    console.log(postData);
    const res = await fetch("http://localhost:8080/addtoorder", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(postData)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}


export const listMyOrder = async ( body,setMyOrders) => {
    console.log(body);
    
    const res = await fetch("http://localhost:8080/user/listmyorder", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return setMyOrders(jsonData);
}



export const removefromcart = async (body) => {
    console.log(body);
    const res = await fetch("http://localhost:8080/cart/removeone", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    // const jsonData = await res.json();
    
    return res;
}