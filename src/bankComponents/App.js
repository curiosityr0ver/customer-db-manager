import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NiceTable from './NiceTable.js'
import NiceHeader from './NiceHeader.js'
import PopUpAddCustomer from './PopUp/PopUpAddCustomer.js'
import AddCustomer from './AddCustomer.js'
import './App.css'
export default function App() {
    const [rows, setRows] = useState([])

    //REST-API
    const fetchCustomers = async () => {
        const res = await axios.get("http://localhost:8800/customers")
        setRows(res.data)
    }

    const addCustomer = async (data) => {
        console.log(data);
        const values = {
            "accno": 1 + rows[rows.length - 1].accno,
            "name": data.name,
            "email": data.email,
            "gender": data.gender,
            "branch": data.address2[1],
            "balance": data.balance,
            "rating": 1.5
        }

        await axios.post("http://localhost:8800/customers", values).then((response) => {
            console.log(response.data);
        });


        setTimeout(() => {
            window.location.reload()
        }, 100);


    }

    const delCustomer = async (values) => {

        // const values = [2010]
        for (let value of values) {
            await axios.delete("http://localhost:8800/customers" + value).then((response) => {
                console.log(response.data);
            });

        }

        setTimeout(() => {
            window.location.reload()
        }, 100);
    }

    useEffect(() => {

        if (rows.length === 0) fetchCustomers()
        console.log(rows);
    }, [rows])


    // enable mySQL from windows services
    return (
        <div>
            <NiceHeader />
            <div id='currentTable'>
                <NiceTable rows={rows} delCustomer={delCustomer} />
            </div>
            <PopUpAddCustomer addCustomer={addCustomer} />
        </div>



    )
}
