import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { DatePicker } from 'react-rainbow-components';


const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review({ custDetails }) {

  useEffect(() => {
    // console.log(custDetails[3].toLocaleString().split(',')[0]);

  }, [])


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Account Details
      </Typography>
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Name"} secondary={custDetails[0] + " " + custDetails[1]} />
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <DatePicker disabled value={custDetails[3]} label="Date Of Birth" />
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Address"} secondary={custDetails[2]} />
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary={"Province"} secondary={custDetails[4]} />
          <ListItemText primary={"Country"} secondary={custDetails[6].label} />
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}