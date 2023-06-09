import * as React from 'react';
import { Button } from 'react-rainbow-components';
import Dialog from '@mui/material/Dialog';
import PaymentCheckout from './PaymentCheckout'
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ZigZag from '../zigzagButtons/ZigZag';
import '../App.css'
export default function AlertDialog({ rows, makePayment }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // console.log(rows);
    return (
        <div>

            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Transfer
            </Button> */}
            <div onClick={handleClickOpen}>
                <ZigZag />
            </div>

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
                        <PaymentCheckout rows={rows} makePayment={makePayment} onClose={handleClose} />
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}