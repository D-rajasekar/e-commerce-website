import { Table } from "flowbite-react";
import React from "react";

const UserItem = (props) => {
    const {userid,firstname,lastname,email,phoneno,streetname,city,state,pincode} = props;
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>{userid} </Table.Cell>
            <Table.Cell>{firstname} </Table.Cell>
            <Table.Cell>{lastname} </Table.Cell>
            <Table.Cell>{email}</Table.Cell>
            <Table.Cell>{phoneno} </Table.Cell>
            <Table.Cell>{streetname} </Table.Cell>
            <Table.Cell>{city}</Table.Cell>
            <Table.Cell>{state} </Table.Cell>
            <Table.Cell>{pincode} </Table.Cell>
        </Table.Row>
    )
}

export default UserItem 