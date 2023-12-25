import { Box, CardMedia, Typography, styled } from "@mui/material"

export const PostCardMedia = styled(CardMedia)(({ theme }) => ({
    paddingTop: '56.25%'
}))

export const PostTitle = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
	textAlign: 'left',
}))

export const PostText = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'baseline',
    fontSize: '12px',
    textAlign: 'left',
    marginBottom: theme.spacing(2),
}))