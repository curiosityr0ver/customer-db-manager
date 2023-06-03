import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Banner from './Banner';


export default function AccountSelecter({ custDetails, setCustDetails }) {

    const [balance, setBalance] = [custDetails[8], setCustDetails[8]]
    const [account, setAccount] = [custDetails[9], setCustDetails[9]]

    // console.log(custDetails, setCustDetails);

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <div onClick={() => { setAccount("Savings") }}>
                        <Banner type={"Savings"} account={account} />
                    </div>
                    <div onClick={() => { setAccount("Current") }}>
                        <Banner type={"Current"} account={account} />
                    </div>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Balance"
                    type='number'
                    value={balance}
                    onChange={(value) => setBalance(value.target.value)}
                    fullWidth
                    autoComplete="shipping postal-code"
                    variant="standard"
                />
            </Grid>

        </React.Fragment>
    );
}
