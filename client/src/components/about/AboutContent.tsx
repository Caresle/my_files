import {
    FC
} from "react";
import {
	Card, CardContent, CardHeader, Container
} from '@mui/material';

const AboutContent : FC = ()  => {
	return (
		<Container maxWidth='sm'>
			<Card sx={{ my: 4 }}>
				<CardHeader title='About' sx={{textAlign: 'center'}}/>
				<CardContent sx={{ textAlign: 'center' }}>
					App for personal manage my files, and made a ease to use
					interface. Made with react, nodejs and typescript.
				</CardContent>
			</Card>
		</Container>
	)
};

export default AboutContent;
