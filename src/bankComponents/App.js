import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NiceTable from './NiceTable.js'
import NiceHeader from './NiceHeader.js'
import './App.css'
export default function App() {
    const [rows, setRows] = useState([])
    // const rows = [
    //     createData('The Rock', "abx@xyz.com", "Male", "Mumbai", 9000, 4.5),
    //     createData('John Cena', "mehta.ishu14@gmail.com", "Male", "Mumbai", 1288000, 3.5),
    //     createData('Beyonce', "abx@xyz.com", "Female", "Khandagiri", 90900, 4.0),
    // ];
    // function createData(name, email, gender, branch, balance, rating) {
    //     return {
    //         name,
    //         email,
    //         gender,
    //         branch,
    //         balance,
    //         rating
    //     };
    // }
    useEffect(() => {
        const fetchCustomers = async () => {
            const res = await axios.get("http://localhost:8800/customers")
            setRows(res.data)
        }
        if (rows.length === 0) fetchCustomers()
        console.log(rows);
    }, [rows])

    return (
        <div>
            <NiceHeader />
            <div id='currentTable'>
                {rows.length !== 0 && <NiceTable rows={rows} />}
            </div>
            {/* <AddCustomer rows={rows} /> */}

        </div>



    )
}
