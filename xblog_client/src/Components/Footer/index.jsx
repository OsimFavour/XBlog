import React from 'react'
import { FooterContainer } from '../../styles/footer'
import { Box, Grid, Link, Typography } from '@mui/material'
import { footers } from '../../Data/FooterDetail'
import { Copyright } from './Copyright'



const Footer = () => {
    return (
        <>
            <FooterContainer maxwidth='md' component='footer'>

                <Grid container spacing={4} justify='space-evenly'>
                   {footers.map((footer) => (
                    <Grid item xs={6} sm={3} key={footer.title}>
                        <Typography variant='h6' color='textPrimary' gutterBottom>
                            {footer.title}
                        </Typography>

                        <ul>
                            {footer.description.map((item) => (
                                <li key={item}>
                                    <Link href='#' variant='subtitle1' color='textSecondary'>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Grid>
                   ))}
                </Grid>

                <Box mt={5}>
                    <Copyright/>
                </Box>
            </FooterContainer>
        </>
    )
}

export default Footer
