import { FC } from 'react';
import logo from '../../assets/react.svg';
import {
	Typography,
	TextField,
	Button,
	FormControl,
	Box,
} from '@mui/material';

const FormContainer : FC = () => {
	return (
		<FormControl fullWidth>
			<Typography variant="h3" align="center">
				Login
			</Typography>
			<Box
				component={'img'} src={logo}
				width={ 128 } alignSelf={'center'}
				sx={{ my: 4 }}
			/>
			<TextField label="Username" required
				fullWidth sx={{ my: 2 }}
			/>
			<TextField label="Password" type="password" required />
			<Button variant="contained" size="large" sx={{ my: 2 }}>Login</Button>
		</FormControl>
	);
};

export default FormContainer;
