import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import NiceTable from './NiceTable.js'
import NiceHeader from './NiceHeader.js'
import './App.css'
export default function App() {

    const rows = [
        createData('The Rock', "abx@xyz.com", "Male", "Mumbai", 9000, 4.5),
        createData('John Cena', "mehta.ishu14@gmail.com", "Male", "Mumbai", 1288000, 3.5),
        createData('Beyonce', "abx@xyz.com", "Female", "Khandagiri", 90900, 4.0),
    ];
    function createData(name, email, gender, branch, balance, rating) {
        return {
            name,
            email,
            gender,
            branch,
            balance,
            rating
        };
    }

    return (
        <div>
            <NiceHeader />
            <div id='currentTable'>
                <NiceTable rows={rows} />
            </div>
        </div>



    )
}
