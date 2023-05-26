import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { CheckboxToggle } from 'react-rainbow-components';
import Banner from './Banner';


export default function PaymentForm({ custDetails, setCustDetails }) {

  const [balance, setBalance] = [custDetails[8], setCustDetails[8]];
  const [account, setAccount] = [custDetails[9], setCustDetails[9]];

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid key={account}>
          <div onClick={() => { setAccount("Current") }} >
            <Banner type="Current" account={account} />
          </div>
          <div onClick={() => { setAccount("Savings") }}>
            <Banner type="Savings" account={account} />
          </div>


        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Opening Balance"
            value={balance}
            onChange={(value) => setBalance(value.target.value)}
            type='number'
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
          <CheckboxToggle
            label="Toggle Label"
          // value={ }
          // onChange={ }
          />
        </Grid>
      </Grid>
    </React.Fragment >
  );
}
