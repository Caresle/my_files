import {
	FC,
} from 'react';
import {
	Card,
	CardContent,
	CardHeader,
	TextField
} from '@mui/material';

const UploadFileForm : FC = () => {
	return (
		<Card sx={{ my: 3 }}>
			<CardHeader title='Upload a file' sx={{ textAlign: 'center' }} />
			<CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
				<TextField type='file' variant='outlined' />
			</CardContent>
		</Card>
	);
};

export default UploadFileForm;
