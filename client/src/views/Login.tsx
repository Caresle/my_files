import { FC } from "react";
import {
	Card,
	CardContent,
	Typography,
	TextField,
	Button,
	FormControl,
	Container,
} from '@mui/material'

const Login : FC = () => {
	return (
		<Container>
			<Card>
				<CardContent>
					<FormControl>
						<Typography variant="h3" align="center">
							Login
						</Typography>
						<div>
							<TextField label="Username" required></TextField>
						</div>
						<div>
							<TextField label="Password" type="password" required></TextField>
						</div>
						<div>
							<Button variant="contained" size="large">Login</Button>
						</div>
					</FormControl>
				</CardContent>
			</Card>
		</Container>
	)
}

export default Login
