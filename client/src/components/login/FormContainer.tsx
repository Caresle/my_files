import { FC, useState } from 'react';
import logo from '../../assets/react.svg';
import {
	Typography,
	TextField,
	Button,
	FormControl,
	Box,
} from '@mui/material';
import GeneralAlert, { ESeverityAlert, IGeneralAlertProps } from '../Common/GeneralAlert';

const FormContainer : FC = () => {
	const [ errors, setErrors ] = useState<IGeneralAlertProps[]>([]);

	const handleLogin = () => {
		console.log('login');
		const error : IGeneralAlertProps = {
			severity: ESeverityAlert.Error,
			text: 'There was an error login the user',
			title: 'Error in login',
			show: true,
		};

		setErrors([...errors, error]);
	};

	return (
		<FormControl fullWidth>
			{
				errors.length > 0 ?
				<GeneralAlert severity={ errors[0].severity }
					text={errors[0].text}
					title={errors[0].title}
					show={errors[0].show}
				/> : <></>
			}
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
			<Button onClick={handleLogin} variant="contained" size="large" sx={{ my: 2 }}>Login</Button>
		</FormControl>
	);
};

export default FormContainer;
