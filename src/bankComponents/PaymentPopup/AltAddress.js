import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Picklist, PicklistOption } from 'react-rainbow-components';
import { useState } from 'react';

export default function AddressForm() {

    const [sender, setSender] = useState()
    const [receiver, setReceiver] = useState()
    const [note, setNote] = useState()
    const [mode, setMode] = useState()




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
                        label="Sender Account No"
                        type='number'
                        placeholder='000000'
                        value={sender}
                        onChange={(value) => setSender(value.target.value)}
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
                        label="Receive Account No"
                        type='number'
                        placeholder='000000'
                        value={receiver}
                        onChange={(value) => setReceiver(value.target.value)}
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={6}>
                    <table>
                        <tr>
                            <td>
                                <TextField
                                    required
                                    id="email"
                                    name="email"
                                    label="Message"
                                    placeholder='optional'
                                    value={note}
                                    onChange={(value) => setNote(value.target.value)}
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
                <Grid item xs={6}>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Picklist label="Payment Mode"
                        value={mode}
                        onChange={value => setMode(value)}
                    >
                        <PicklistOption name="en-US" label="IMPS" icon={<i class="fa-solid fa-indian-rupee-sign"></i>} />
                        <PicklistOption name="es-ES" label="Net-Banking" icon={<i class="fa-solid fa-flag-usa"></i>} />
                        <PicklistOption name="fr-Fr" label="NEFT" icon={<i class="fa-brands fa-canadian-maple-leaf"></i>} />
                    </Picklist>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
