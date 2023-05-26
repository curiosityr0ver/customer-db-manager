import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function PaymentForm({ custDetails, setCustDetails }) {

  const [balance, setBalance] = [custDetails[8], setCustDetails[8]];
  const [account, setAccount] = [custDetails[9], setCustDetails[9]];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Account Configuration
      </Typography>
      <Grid container spacing={3}>
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
        </Grid>
        <Grid item xs={12} md={6}>
          <button onClick={setAccount("Current")}>
            Current Account
          </button>
          <button onClick={setAccount("Savings")}>
            Savings Account
          </button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
