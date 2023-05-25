import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NiceTable from './NiceTable.js'
import NiceHeader from './NiceHeader.js'
import AddCustomer from './AddCustomer.js'
import './App.css'
export default function App() {
    const [rows, setRows] = useState([])

    //REST-API
    const fetchCustomers = async () => {
        const res = await axios.get("http://localhost:8800/customers")
        setRows(res.data)
    }

    const addCustomer = async () => {

        const obj = {
            name: "harambe",
            email: "test@working.com",
            gender: "male",
            branch: "bhaad",
            balance: 3000,
            rating: 1.5
        }

        const res = await axios.post("http://localhost:8800/customers", obj)

    }

    useEffect(() => {

        if (rows.length === 0) fetchCustomers()
        console.log(rows);
    }, [rows])



    return (
        <div>
            <NiceHeader />
            <div id='currentTable'>
                {rows.length !== 0 && <NiceTable rows={rows} />}
            </div>
            <AddCustomer rows={rows} addCustomer={addCustomer} />

        </div>



    )
}
