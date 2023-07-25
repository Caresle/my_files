import { FC } from "react";
import {
	Card,
	CardContent,
	Container,
} from '@mui/material';
import FormContainer from "../components/login/FormContainer";

const Login : FC = () => {
	return (
		<Container maxWidth={"sm"}>
			<Card sx={{ my: 3 }}>
				<CardContent>
					<FormContainer />
				</CardContent>
			</Card>
		</Container>
	);
};

export default Login;
