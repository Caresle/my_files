import {
	FC
} from 'react';
import {
	Card,
	CardContent,
	Container,
} from '@mui/material';
import SignUpForm from '../components/signup/SignUpForm';

const SignUp : FC = () => {
	return (
		<Container maxWidth={"sm"}>
			<Card sx={{ my: 3 }}>
				<CardContent>
					<SignUpForm />
				</CardContent>
			</Card>
		</Container>
	);
};

export default SignUp;
