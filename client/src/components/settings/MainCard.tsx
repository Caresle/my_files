import { FC } from 'react'
import {
	Card,
	Container,
	CardContent,
	CardHeader,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Button
} from '@mui/material';
import {
	ExpandMoreOutlined as ExpandMoreIcon
} from '@mui/icons-material';

const MainCard : FC = () => {
	return (
		<Container maxWidth={'md'} sx={{ my: 2 }}>
			<Card>
				<CardHeader title="Settings" sx={{textAlign: 'center'}} />
				<CardContent>
					<Button variant='contained'> asjdhkasd</Button>
					<Accordion variant='outlined'>
						<AccordionSummary expandIcon={<ExpandMoreIcon />} >
							General
						</AccordionSummary>
						<AccordionDetails>

						</AccordionDetails>
					</Accordion>
				</CardContent>
			</Card>
		</Container>
	);
};

export default MainCard;
