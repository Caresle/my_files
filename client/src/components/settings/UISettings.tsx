import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from '@mui/material';
import {
	ExpandMoreOutlined as ExpandMoreIcon
} from '@mui/icons-material';
import { FC } from 'react';

const UISettings : FC = () => {
	return (
		<Accordion variant='outlined' sx={{ my: 2}}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				UI
			</AccordionSummary>
			<AccordionDetails>

			</AccordionDetails>
		</Accordion>
	);
};

export default UISettings;
