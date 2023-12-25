import React from 'react'
import { CssBaseline, Toolbar, Typography } from '@mui/material'
import { HeaderContainer } from '../../styles/header'


const Header = () => {
    return (
        <>
            <CssBaseline/>
            <HeaderContainer
                position='static'
                color='white'
                elevation={0}
            >
                <Toolbar>
                    <Typography variant='h6' color='inherit' noWrap>
                        XBlog
                    </Typography>
                </Toolbar>
            </HeaderContainer>
        </>
    )
}

export default Header