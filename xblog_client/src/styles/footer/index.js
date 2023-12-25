import { Container } from "@mui/material"
import { styled } from "@mui/material/styles"


export const FooterContainer = styled(Container)(({theme}) => ({
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakkpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6)
    }
})) 