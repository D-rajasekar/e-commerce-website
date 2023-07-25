import { Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import { getAllOrders } from "../../api";

const Orderlist = () => {
  const [allOrders,setAllOrders ] = useState([]);
  const [startDate,setStartDate] = useState(new Date());
  const [endDate,setEndDate] = useState(new Date());

  useEffect(()=>{
      getAllOrders(setAllOrders)
      setStartDate(new Date(startDate));
      setEndDate(new Date(endDate));

      // const Orders = allOrders.map(order => {
      //   let dateArray = order.date.split('.');
      //   return {...order,Date:new Date(dateArray[2]+'-'+dateArray[1]+'-'+dateArray[0])}
      // })
      // setAllOrders(Orders)
      // console.log(Orders)
      console.log(allOrders)
  },[])

  return (
    <div className="m-20">
      <label htmlFor="from-date">From Date: </label>
      <input type="date" style={{borderRadius:10}} value={startDate.getFullYear().toString() +
          "-" +
          (startDate.getMonth() + 1).toString().padStart(2, 0) +
          "-" +
          startDate.getDate().toString().padStart(2, 0)} onChange={(e)=>setStartDate(new Date(e.target.value))}/>
      &nbsp; &nbsp;
      <label htmlFor="from-date">To Date: </label>
      <input type="date" style={{borderRadius:10}} value={endDate.getFullYear().toString() +"-" +  (endDate.getMonth() + 1).toString().padStart(2, 0) +   "-" +  endDate.getDate().toString().padStart(2, 0)} onChange={(e)=>setEndDate(new Date(e.target.value))}/>
      <Table>
        <Table.Head>
          <Table.HeadCell>Order-Id</Table.HeadCell>
          <Table.HeadCell>Ordered-Products</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Total</Table.HeadCell>
          <Table.HeadCell>Address</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {allOrders.map((r)=>{
            if(r.Date.getTime()>=startDate.getTime() && r.Date.getTime()<=endDate.getTime())
              return <OrderItem key={r._id} address ={r.address} date={r.date} rid={r._id} total={r.amount} OrderedProducts={r.OrderedProducts} />
          })}
          
        </Table.Body>
      </Table>
    </div>
  );
};

export default Orderlist;
