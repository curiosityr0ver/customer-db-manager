import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Banner from './Banner';


export default function AccountSelecter({ custDetails, setCustDetails }) {

    const [balance, setBalance] = [custDetails[8], setCustDetails[8]]
    const [account, setAccount] = [custDetails[9], setCustDetails[9]]

    console.log(custDetails, setCustDetails);
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Customer Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <div onClick={() => { setAccount("savings") }}>
                        <Banner type={"savings"} account={account} />
                    </div>
                    <div onClick={() => { setAccount("current") }}>
                        <Banner type={"current"} account={account} />
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
