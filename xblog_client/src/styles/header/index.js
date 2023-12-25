import { AppBar } from "@mui/material"
import { styled } from "@mui/material/styles"


export const HeaderContainer = styled(AppBar)(({theme}) => ({
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: '#fff'
    
})) 