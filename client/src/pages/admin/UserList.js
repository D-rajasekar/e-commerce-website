import { Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import UserItem from "./UserItem";
import { getUserList } from "../../api";

const Userlist = () => {
  const [alluser,setAllUser] = useState([])
  useEffect(()=>{
      getUserList(setAllUser)
  },[])
  return (
    <div className="m-20">
      <Table>
        <Table.Head>
           <Table.HeadCell> userid </Table.HeadCell>
           <Table.HeadCell> firstname </Table.HeadCell>
           <Table.HeadCell> lastname </Table.HeadCell>
           <Table.HeadCell> email </Table.HeadCell>
           <Table.HeadCell> phoneno </Table.HeadCell>
           <Table.HeadCell> streetname </Table.HeadCell>
           <Table.HeadCell> city </Table.HeadCell>
           <Table.HeadCell> state </Table.HeadCell>
           <Table.HeadCell> pincode </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">

          {alluser.map((r)=>{
            return   <UserItem key={r._id} userid={r.userid} firstname={r.firstname} lastname={r.lastname} email={r.email} phoneno={r.phoneno} streetname={r.streetname} city={r.city} state={r.state} pincode={r.pincode} />
          })}
       
              
        </Table.Body>
      </Table>
    </div>
  );
};

export default Userlist;
