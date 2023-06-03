/* eslint-disable eqeqeq */
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
import AddressForm from './AddressForm';
import AccountSelector from './AccountSelecter.js'
import Review from './Review.js';
import { useState } from 'react';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Wells Fargo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Customer Details', 'Account details', 'Review Your Entry'];


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Checkout({ addCustomer }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [address, setAddress] = useState()
  const [dob, setDob] = useState()
  const [province, setProvince] = useState()
  const [zip, setZip] = useState()
  const [country, setCountry] = useState()
  const [gender, setGender] = useState()
  const [balance, setBalance] = useState()
  const [account, setAccount] = useState()
  const [email, setEmail] = useState()


  const custDetails = [firstName, lastName, address, dob, province, zip, country, gender, balance, account, email]
  const setCustDetails = [setFirstName, setLastName, setAddress, setDob, setProvince, setZip, setCountry, setGender, setBalance, setAccount, setEmail]

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    window.scrollTo(0, 0)

    const custJSobj = {
      name: firstName + " " + lastName,
      email: email,
      address2: [address, province, country.label, zip],
      dob: dob.toLocaleString().split(',')[0],
      gender: gender.label == "Male" ? "male" : "female",
      balance: balance,
      account: account
    }
    if (activeStep == 2) {
      addCustomer(custJSobj)
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <AddressForm custDetails={custDetails} setCustDetails={setCustDetails} />;
      case 1:
        return <AccountSelector custDetails={custDetails} setCustDetails={setCustDetails} />;
      case 2:
        return <Review cust={custDetails} />;
      default:
        throw new Error('Unknown step');
    }
  }

  // useEffect(() => {
  //   console.log(account)
  // }, [account])



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
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
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
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
