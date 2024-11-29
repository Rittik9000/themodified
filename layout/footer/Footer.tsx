import { Box, Button, Grid2, Input, List, ListItem, styled, Typography } from '@mui/material'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faLinkedin, faSquareFacebook, faSquareGithub, faSquareInstagram, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {
	




	// const theme = useTheme();

	const FooterTopBox = styled(Box)(({ theme }) => ({
		padding: "72px 38px",
		backgroundImage: `url("/images/form_back_1.jpg")`,
		backgroundColor: `#1a237e 25`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		backgroundBlendMode: "overlay",
		position: "relative",
		top: "-100px",
		transform: "translateY(-50%)",
		borderRadius: "10px",
		alignItems: "center",
	}))

	const FooterTopText = styled(Typography)(({ theme }) => ({

	}))

	const socialIconStyle = {
		color: "white", 
		fontSize: "32px",
		marginRight: "10px"
	}
	return (
		<>
			<Box style={{ position: "relative", padding: "100px 72px 72px", backgroundColor: "#1a237e", paddingTop:"20vh"}} mt={{xs:0, md:'3rem'}}>
				<FooterTopBox display={{xs:'none', md:'block'}}>
					<Grid2 container>
						<Grid2 size={10}>
							<FooterTopText variant='h4' sx={{ color: "white" }}>Ready to get started?</FooterTopText>
							<FooterTopText variant='h4' sx={{ color: "white" }}>Talk to us today</FooterTopText>
						</Grid2>
						<Grid2 size={2}>
							<Link href="/auth/signup" style={{ padding: "10px 20px", backgroundColor: "#1565c0", color: "white", textDecoration: "none", borderRadius: "10px" }}>Get started</Link>
						</Grid2>
					</Grid2>
				</FooterTopBox>
				<Box>
					<Grid2 container spacing={5} sx={{ color: "white" }}>
						<Grid2 size={{ md: 2, lg: 2 }}>
							<img src="/images/departments.jpg" alt='footer logo' style={{ maxHeight: "100px" }} />
						</Grid2>
						<Grid2 size={{ md: 3, lg: 3 }}>
							<Typography sx={{ color: "#A5A5A5" }}>About</Typography>
							<List>
								<ListItem>Home</ListItem>
								<ListItem>Get in touch</ListItem>
								<ListItem>FAQs</ListItem>
							</List>
						</Grid2>
						<Grid2 size={{ md: 3, lg: 3 }}>
							<Typography sx={{ color: "#A5A5A5" }}>Product</Typography>
							<List>
								<ListItem>Testimonials</ListItem>
								<ListItem>How it works</ListItem>
								<ListItem>Member discounts</ListItem>
							</List>
						</Grid2>
						<Grid2 size={{ md: 4, lg: 4 }}>
							<Typography sx={{ color: "#A5A5A5" }}>Not quite ready?</Typography>
							<Box>
								<FontAwesomeIcon icon={faSquareFacebook} style={socialIconStyle} />
								<FontAwesomeIcon icon={faSquareTwitter} style={socialIconStyle} />
								<FontAwesomeIcon icon={faGooglePlusG} style={socialIconStyle} />
								<FontAwesomeIcon icon={faSquareGithub} style={socialIconStyle} />
								<FontAwesomeIcon icon={faSquareInstagram} style={socialIconStyle} />
								<FontAwesomeIcon icon={faLinkedin} style={socialIconStyle} />
							</Box>
							<Box sx={{padding: "20px 0"}}>
								<Typography sx={{ paddingBottom: "10px"}}>Get newsletter on every updates. No spam.</Typography>
								<Grid2 container spacing={2}>
									<Grid2 size={8}>
										<Input fullWidth   />
									</Grid2>
									<Grid2 size={4}>
										<Button variant="contained">Subscribe</Button>
									</Grid2>
								</Grid2>
							</Box>
						</Grid2>
					</Grid2>
				</Box>
			</Box>
		</>
	)
}

export default Footer