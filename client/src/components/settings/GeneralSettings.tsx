import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from '@mui/material';
import {
	ExpandMoreOutlined as ExpandMoreIcon
} from '@mui/icons-material';
import { FC } from 'react';

const GeneralSettings : FC = () => {
	return (
		<Accordion variant='outlined'>
			<AccordionSummary expandIcon={<ExpandMoreIcon />} >
				General
			</AccordionSummary>
			<AccordionDetails>
			</AccordionDetails>
		</Accordion>
	);
};

export default GeneralSettings;
