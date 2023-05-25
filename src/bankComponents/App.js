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

        const values = {
            "accno": 1 + rows[rows.length - 1].accno,
            "name": "leono",
            "email": "test@working.com",
            "gender": "male",
            "branch": "bhaad",
            "balance": 2000,
            "rating": 1.5
        }

        const res = await axios.post("http://localhost:8800/customers", values)

    }

    const delCustomer = async () => {

        const values = [2010]
        for (let value of values) {
            const res = await axios.delete("http://localhost:8800/customers" + value);
        }
        window.location.reload()
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
            <AddCustomer rows={rows} addCustomer={addCustomer} delCustomer={delCustomer} />

        </div>



    )
}
