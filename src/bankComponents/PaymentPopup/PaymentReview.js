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

export default function Review({ sender, receiver, status }) {

  console.log(status);

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {sender && AccountPresent("blue", sender)}
          {receiver && AccountPresent("green", receiver)}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}



const AccountPresent = (theme, acc) => {

  return (
    <div className={`AccountPresentCard ${theme}`}>
      <table>
        <tr>
          <td>
            <b>{acc.name}</b>
            <br />
            {acc.accno}
          </td>
          <td>
            <div className={`AmountCard ${theme}`}>
              {"₹" + acc.balance}
            </div>

          </td>
        </tr>
      </table>



    </div>
  )
}
