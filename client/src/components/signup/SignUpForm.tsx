import {
	FC
} from 'react';
import {
	Box,
	FormControl,
	Typography,
	TextField,
	Button,
} from '@mui/material';
import logo from '../../assets/react.svg';


const SignUpForm : FC = () => {
	return (
		<FormControl fullWidth>
			<Typography variant='h3' textAlign={'center'}>
				Sign Up
			</Typography>
			<Box
				component={'img'} src={logo}
				width={ 128 } alignSelf={'center'}
				sx={{ my: 4 }}
			/>
			<TextField label="Username" required
				fullWidth sx={{ my: 2 }}
			/>
			<TextField label="Password" type="password" required sx={{ mb: 2 }} />
			<TextField label="Repeat Password" type="password" required sx={{ mb: 2 }}/>
			<Button variant='contained'>Sign Up</Button>
		</FormControl>
	);
};

export default SignUpForm;
