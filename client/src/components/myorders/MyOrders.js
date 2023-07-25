import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import MyOrdersList from "./MyOrdersList";
import { listMyOrder } from "../../api";

const MyOrders = () => {
    const [myorders,setMyOrders] = useState([])
    const uid = localStorage.getItem("uid")
    // alert(uid)
    const body = {uid};
    useEffect(()=>{
      listMyOrder(body,setMyOrders);
    },[])
    return (
        <>
        <div className="m-20">
      <Table>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Total</Table.HeadCell>
          <Table.HeadCell>Address</Table.HeadCell>
          <Table.HeadCell>Phone</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {myorders.map((r)=>{
              return <MyOrdersList key={r._id} name={r.name} total={r.amount} date={r.date} address={r.address} phone={r.phone} status={r.status}/>
          })}
          
        </Table.Body>
      </Table>
    </div>
          
        </>
    )
}



export default MyOrders;
