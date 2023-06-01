import * as React from 'react';
import Grid from '@mui/material/Grid';

export default function Review({ sender, receiver, status }) {

  // console.log(status);
  //TODO: display something else if account no.s not found or balance insufficient
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
