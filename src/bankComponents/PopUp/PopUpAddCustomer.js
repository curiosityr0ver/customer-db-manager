import * as React from 'react';
import { Button } from 'react-rainbow-components';
import Dialog from '@mui/material/Dialog';
import Checkout from './Checkout.js'
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '../App.css'
export default function AlertDialog({ addCustomer }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Account
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Wells Fargo"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Checkout addCustomer={addCustomer} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        label="Close"
                        variant="destructive"
                        className="rainbow-m-around_medium"
                        borderRadius="semi-square"
                        onClick={handleClose}
                    />
                </DialogActions>
            </Dialog>
        </div>
    );
}