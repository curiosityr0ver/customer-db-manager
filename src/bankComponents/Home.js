import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NiceTable from './NiceTable.js'
import NiceHeader from './NiceHeader.js'
import PopUpAddCustomer from './PopUp/PopUpAddCustomer.js'
import AddCustomer from './AddCustomer.js'
import PopupPayment from './PaymentPopup/PopupPayment.js'

import AboutUs from './AboutUs.js'
import './App.css'
import { Button } from 'react-rainbow-components'

export default function App() {
    const [rows, setRows] = useState([])
    const [active, setactive] = useState(0)

    //REST-API
    const fetchCustomers = async () => {
        const res = await axios.get("http://localhost:8800/customers")
        setRows(res.data)
    }

    const makePayment = async (data) => {

        const values1 = [data[0], data[2]]
        const values2 = [data[1], data[2]]

        await axios.post("http://localhost:8800/increment" + values1)
        await axios.post("http://localhost:8800/decrement" + values2)
        // setTimeout(() => {
        //     window.location.reload()
        // }, 100);
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
                // console.log(response.data);
            });

        }

        setTimeout(() => {
            window.location.reload()
        }, 100);
    }




    useEffect(() => {

        if (rows.length === 0) fetchCustomers()
        // console.log(rows);
    }, [rows])


    // enable mySQL from windows services
    switch (active) {
        //fix css file overlap
        case 1:
            return <AboutUs />
            break;


        default:
            return (
                <div>
                    <div id='currentTable'>
                        <NiceTable rows={rows} delCustomer={delCustomer} />
                    </div>
                    {/* <PopUpAddCustomer addCustomer={addCustomer} /> */}
                    <PopupPayment rows={rows} makePayment={makePayment} />
                </div>
            )
    }
}
