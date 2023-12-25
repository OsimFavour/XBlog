import React from 'react'
import {Button, Card, CardActions, CardContent, Container, Grid, Typography } from '@mui/material'
import { PostCardMedia, PostText, PostTitle } from '../../styles/posts'


const Posts = (props) => {
	const { posts } = props;
	if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
	return (
		<>
			<Container maxWidth="md" sx={{ py: 8 }} component="main">
				<Grid container spacing={4} alignItems="flex-end">
					{posts.map((post) => {
						return (
							// Enterprise card is full width at sm breakpoint
							<Grid item key={post.id} xs={12} md={4} sm={6}>
								<Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
									<PostCardMedia
										image="https://source.unsplash.com/random"
										title="Image title"
									/>
									<CardContent sx={{ flexGrow: 1 }}>
										<PostTitle
											gutterBottom
											variant="h5"
											component="h2"
										>
											{post.title.substr(0, 50)}...
										</PostTitle>
										<PostText>
											<Typography
												component="p"
												color="textPrimary"
											></Typography>
											<Typography variant="p" color="textSecondary">
												{post.excerpt.substr(0, 60)}...
											</Typography>
										</PostText>
									</CardContent>
                                    <CardActions>
                                        <Button size="small">Read More</Button>
                                    </CardActions>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</>
	);
};
export default Posts;