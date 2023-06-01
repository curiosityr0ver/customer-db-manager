import * as React from 'react';
import { Button } from 'react-rainbow-components';
import Dialog from '@mui/material/Dialog';
import Checkout from './Checkout.js'
import PaymentCheckout from '../PaymentPopup/PaymentCheckout.js'
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ZigZag from '../zigzagButtons/ZigZag.js';



import { useState } from 'react';
export default function AlertDialog({ rows, makePayment, addCustomer }) {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(0)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const whichPopup = () => {
        if (active === 1) {
            return (
                <Checkout addCustomer={addCustomer} />
            )
        } else if (active === 2) {
            return (
                <PaymentCheckout rows={rows} makePayment={makePayment} onClose={handleClose} />
            )

        }
    }

    return (
        <div>
            <ZigZag onLeftClick={() => { setActive(1); handleClickOpen() }} onRightClick={() => { setActive(2); handleClickOpen() }} />
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
                        {whichPopup()}
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


