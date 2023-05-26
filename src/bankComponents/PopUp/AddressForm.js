import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Picklist, PicklistOption, DatePicker } from 'react-rainbow-components';

export default function AddressForm({ custDetails, setCustDetails }) {

  const [firstName, setFirstName] = [custDetails[0], setCustDetails[0]];
  const [lastName, setLastName] = [custDetails[1], setCustDetails[1]]
  const [address, setAddress] = [custDetails[2], setCustDetails[2]]
  const [dob, setDob] = [custDetails[3], setCustDetails[3]]
  const [province, setProvince] = [custDetails[4], setCustDetails[4]]
  const [zip, setZip] = [custDetails[5], setCustDetails[5]]
  const [country, setCountry] = [custDetails[6], setCustDetails[6]]
  const [gender, setGender] = [custDetails[7], setCustDetails[7]]
  const [email, setEmail] = [custDetails[10], setCustDetails[10]]



  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Customer Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <i class="fa-solid fa-paragraph fa-flip"></i>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            value={firstName}
            onChange={(value) => setFirstName(value.target.value)}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />

        </Grid>
        <Grid item xs={12} sm={6}>
          <i class="fa-solid fa-paragraph fa-flip"></i>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            value={lastName}
            onChange={(value) => setLastName(value.target.value)}
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={18}>
          <table>
            <tr>
              <td>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email Address"
                  value={email}
                  onChange={(value) => setEmail(value.target.value)}
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                />
              </td>
              <td>
                <i class="fa-solid fa-envelope-open-text fa-shake fa-2xl"></i>
              </td>
            </tr>
          </table>
        </Grid>
        <Grid item xs={12}>
          <table>
            <tr>
              <td>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  label="Address line 1"
                  value={address}
                  onChange={(value) => setAddress(value.target.value)}
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="standard"
                />
              </td>
              <td>
                <i class="fa-solid fa-map-location-dot fa-2xl"></i>
              </td>
            </tr>
          </table>

        </Grid>
        <Grid item xs={6}>
          <DatePicker
            id="datePicker-1"
            value={dob}
            onChange={value => setDob(value)}
            label="Date Of Birth"
            formatStyle="large"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            value={province}
            onChange={(value) => setProvince(value.target.value)}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            type='number'
            value={zip}
            onChange={(value) => setZip(value.target.value)}
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Picklist label="Country"
            value={country}
            onChange={value => setCountry(value)}
          >
            <PicklistOption name="en-US" label="India" icon={<i class="fa-solid fa-indian-rupee-sign"></i>} />
            <PicklistOption name="es-ES" label="USA" icon={<i class="fa-solid fa-flag-usa"></i>} />
            <PicklistOption name="fr-Fr" label="Canada" icon={<i class="fa-brands fa-canadian-maple-leaf"></i>} />
          </Picklist>
        </Grid>
        <Grid item xs={12}>

          <Picklist label="Gender"
            value={gender}
            onChange={value => setGender(value)}
          >
            <PicklistOption name="en-US" label="Male" icon={<i class="fa-solid fa-mars fa-lg"></i>} />
            <PicklistOption name="es-ES" label="Female" icon={<i class="fa-solid fa-venus fa-lg"></i>} />
          </Picklist>

        </Grid>
      </Grid>
    </React.Fragment>
  );
}
