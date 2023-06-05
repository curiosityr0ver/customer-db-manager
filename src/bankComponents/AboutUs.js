import * as React from 'react';
import CustomerCard from './CustomerCard.js'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const cards = [1, 2, 3, 4, 5, 6];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                    }}
                >
                    <Container maxWidth="lg">
                        <Typography fontFamily={'Dancing Script'} variant="h4" align="center" color="text.secondary" paragraph>
                            At Wells Fargo, our mission is to revolutionize the financial landscape by harnessing cutting-edge tech and create a seamless digital ecosystem that empowers people to take control of their finances. We are driven by a passion for innovation, a dedication to excellence, and a vision of a world where financial services are not just accessible, but truly empowering for all.
                        </Typography>
                    </Container>
                </Box>
                <Container maxWidth="md">
                    <Grid container spacing={8}>
                        {cards.map((card, index) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <CustomerCard empid={index} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider >
    );
}