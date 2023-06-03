import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Banner from '../PopUp/Banner.js'
export default function ({ cust }) {

    // console.log(cust[3]);


    const customer = {
        name: cust[0] + " " + cust[1],
        address: cust[2],
        pincode: cust[5],
        country: cust[6].label,
        gender: cust[7].label,
        balance: cust[8],
        type: cust[9],
        email: cust[10],
        dob: cust[3].toString().split(' ').slice(0, 4).toString()
    }

    // console.log(cust[3].toString().split(' ').slice(0, 4).toString());
    console.log(customer);

    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={12} sm={9}>
                    <TextField
                        disabled
                        id="firstName"
                        name="firstName"
                        label="Name"
                        value={customer.name}
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />

                </Grid>
                <Grid item xs={6} sm={9}>
                    <TextField
                        disabled
                        id="email"
                        name="email"
                        label="Email Address"
                        value={customer.email}
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={9} sm={9}>

                    <TextField
                        disabled
                        id="address1"
                        name="address1"
                        label="Address"
                        value={customer.address}
                        autoComplete="shipping address-line1"
                        variant="standard"
                    />

                </Grid>
                <Grid item xs={6}>
                    <TextField
                        disabled
                        id="address1"
                        name="address1"
                        label="Address"
                        value={customer.dob}
                        autoComplete="shipping address-line1"
                        variant="standard"
                    />
                </Grid>
                <Grid>
                    <div className="genderTab red" style={{ position: "relative", left: "90px", top: "100px" }}>
                        <b>Gender</b>
                        <div style={{ fontSize: "1rem", position: "relative", left: "1px", bottom: "1px" }}>{customer.gender}</div>
                        <div style={{ fontSize: "3rem", position: "relative", left: "60px", bottom: "50px" }}>
                            <i class={`fa-solid ${customer.gender == "Male" ? "fa-mars" : "fa-venus"}`}></i>
                        </div>
                    </div>
                    <div className="genderTab green" style={{ position: "relative", right: "70px", top: "10px" }}>
                        <b>Country </b>
                        <div style={{ fontSize: "1rem", position: "relative", left: "0px", bottom: "1px" }}>{customer.country}</div>
                        <div style={{ fontSize: "3rem", position: "relative", left: "60px", bottom: "50px" }}>
                            <i class={getCounty(customer.country)}></i>
                        </div>
                    </div>
                    <div className="genderTab yellow" style={{ position: "relative", right: "230px", bottom: "80px" }}>
                        <b>Balance </b>
                        <div style={{ fontSize: "1.5rem", position: "relative", top: "2px", bottom: "10px" }}>
                            ₹{customer.balance}
                        </div>
                    </div>
                </Grid>
                <Grid>
                    <Banner type={customer.type} account={customer.type} />
                </Grid>

            </Grid>
        </React.Fragment >
    )
}



const getCounty = (country) => {

    if (country == "USA") {
        return "fa-solid fa-flag-usa"
    }
}