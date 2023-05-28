import { React, useState, useEffect } from 'react'
import AddCustomer from './AddCustomer.js'
import AboutUs from './AboutUs.js'
import CustomerCard from './CustomerCard.js'
import PopUpAddCustomer from './PopUp/PopUpAddCustomer.js'
import NiceTable from './NiceTable.js'
import './App.css'

import axios from 'axios'

export default function MainPage() {
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
            "rating": 3.5
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

    return (
        <div>
            <div id='currentTable'>
                <NiceTable rows={rows} delCustomer={delCustomer} />
            </div>
            <PopUpAddCustomer addCustomer={addCustomer} />
            <CustomerCard />


        </div>
    )
}
