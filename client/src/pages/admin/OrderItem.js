import React from "react";
import { Table } from "flowbite-react";
const OrderItem = (props)=>{
    const {address,date,total,rid,OrderedProducts} = props
    const dateArray = props.date.split('.');
    let orderstatus="Success";
    
    return(
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>{rid}</Table.Cell>
            <Table.Cell>{OrderedProducts}</Table.Cell>
            <Table.Cell>{dateArray[2]+'-'+dateArray[1]+'-'+dateArray[0]}</Table.Cell>
            <Table.Cell>{total}</Table.Cell>
            <Table.Cell>{address}</Table.Cell>
            <Table.Cell>{orderstatus}</Table.Cell>
          </Table.Row>
    )
}

export default OrderItem