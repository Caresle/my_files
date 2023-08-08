import { FC } from 'react'
import {
	Card,
	Container,
	CardContent,
	CardHeader,
} from '@mui/material';
import UISettings from './UISettings';
import GeneralSettings from './GeneralSettings';

const MainCard : FC = () => {
	return (
		<Container maxWidth={'md'} sx={{ my: 2 }}>
			<Card>
				<CardHeader title="Settings" sx={{textAlign: 'center'}} />
				<CardContent>
					{/* General settings */}
						<GeneralSettings />

					{/* UI Settings */}
					<UISettings />
				</CardContent>
			</Card>
		</Container>
	);
};

export default MainCard;
