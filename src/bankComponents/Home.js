import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NiceTable from './NiceTable.js'
import PopUp from './PopUp/PopupUp.js'
import Chalta from './StarWars/Chalta.js'
import AboutUs from './AboutUs.js'
import ZigZag from './zigzagButtons/ZigZag.js'
import './App.css'

export default function App({ active }) {
    const [rows, setRows] = useState([])
    //REST-API
    const fetchCustomers = async () => {
        const res = await axios.get("http://localhost:8800/customers")
        setRows(res.data)
    }

    const makePayment = async (data) => {

        const values1 = [data[1], data[2]]
        const values2 = [data[0], data[2]]

        // console.log(data[0], data[1], data[2]);
        // console.log(`UPDATE currentac SET balance = balance + ${data[2]} where accno = ${data[0]}`);
        // console.log(`UPDATE currentac SET balance = balance - ${data[2]} where accno = ${data[1]}`);
        await axios.post("http://localhost:8800/increment" + values1).then((response) => {
            console.log(response.data);
        });
        await axios.post("http://localhost:8800/decrement" + values2).then((response) => {
            console.log(response.data);
        });
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
        case 2:
            return <Chalta />
        default:
            return (
                <div>
                    <div id='currentTable'>
                        <NiceTable rows={rows} delCustomer={delCustomer} />
                    </div>
                    //This is overlapping for both actions, fix that.
                    <PopUp rows={rows} makePayment={makePayment} addCustomer={addCustomer} />
                </div>
            )
    }
}
