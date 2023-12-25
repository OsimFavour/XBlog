import { Link, Typography } from "@mui/material"


export const Copyright = () => {
    return (
        <Typography 
            variant='body2' 
            color='textSecondary' 
            align='center'
        >
            <Link color='inherit' href='#'>
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}
