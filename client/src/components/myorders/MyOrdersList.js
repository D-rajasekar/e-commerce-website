import React from "react";
import { Table } from "flowbite-react";
const MyOrdersList = (props) =>{
    const {name,total,date,address,phone,status="success"} = props;
    return(
        <>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{date}</Table.Cell>
                <Table.Cell>{total}</Table.Cell>
                <Table.Cell>{address}</Table.Cell>
                <Table.Cell>{phone}</Table.Cell>
                <Table.Cell>{status}</Table.Cell>
            </Table.Row>
        </>
    )
}

export default MyOrdersList;