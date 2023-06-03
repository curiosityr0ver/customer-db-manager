import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AltAddress from './AltAddress.js';
import PaymentReview from './PaymentReview.js'
import { useState } from 'react';


const steps = ['Make Payment', 'Transaction Details'];


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Checkout({ rows, makePayment, onClose }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [sender, setSender] = useState();
  const [receiver, setReceiver] = useState();
  const [amount, setAmount] = useState()
  const [note, setNote] = useState()
  const [mode, setMode] = useState()
  const [senderPresent, setSenderPresent] = useState() // Account object of sender if found.
  const [receiverPresent, setReceiverPresent] = useState() // Account object of receiver if found.
  const [status, setStatus] = useState(0)

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    window.scrollTo(0, 0)
    var sdr, rcr;
    var nb1 = 0, nb2 = 0;

    if (activeStep === 0) {

      //Checking if both account no.s are present in Database or not.
      for (let row of rows) {
        // eslint-disable-next-line eqeqeq
        if (row.accno == sender) {
          sdr = row
          setSenderPresent(row);
        }
        // eslint-disable-next-line eqeqeq
        if (row.accno == receiver) {
          rcr = row
        }
      }

      setSenderPresent(sdr)
      setReceiverPresent(rcr)

      if (sdr != null && rcr != null) {
        nb1 = sdr.balance
        nb2 = rcr.balance
        nb1 -= amount
        nb2 -= amount * (-1)
        if (nb1 > 0 && nb2 > 0) {
          setStatus(1)
        }
      }
    }

    if (activeStep === 1) {
      //modify              
      makePayment([sender, receiver, amount])
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <AltAddress sender={sender} setSender={setSender} receiver={receiver} setReceiver={setReceiver} amount={amount} setAmount={setAmount} note={note} setNote={setNote} mode={mode} setMode={setMode} />;
      case 1:
        return <PaymentReview sender={senderPresent} receiver={receiverPresent} status={status} />;
      default:
        return <div>
          Transaction processed with an order ID of 9931355.
        </div>
    }
  }


  const pairOfButtons = () => {
    if (activeStep < 2) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          {activeStep !== 0 && (
            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
              Back
            </Button>
          )}

          <Button
            variant="contained"
            onClick={handleNext}
            sx={{ mt: 3, ml: 1 }}
          >
            {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
          </Button>
        </Box>
      )
    }
  }



  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {getStepContent(activeStep)}
            {pairOfButtons()}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider >
  );
}


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Wells Tango
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}