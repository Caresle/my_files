import {
	FC
} from "react";
import {
	Card,
	CardContent,
	Container,
	Typography
} from "@mui/material";


const DashboardItem : FC = () => {
	return (
		<Container maxWidth={"sm"} sx={{ my: 2 }}>
			<Card variant="outlined">
				<CardContent>
					<Typography variant="h4">
						Item
					</Typography>
				</CardContent>
			</Card>
		</Container>
	);
};

export default DashboardItem;
