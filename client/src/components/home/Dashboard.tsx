import { FC } from "react";
import {
	Card,
	CardContent,
	Container,
} from "@mui/material";
import DashboardItem from "./DashboardItem";

const Dashboard : FC = () => {
	return (
		<Container>
			<Card variant="outlined">
				<CardContent>
					<DashboardItem />
					<DashboardItem />
					<DashboardItem />
					<DashboardItem />
				</CardContent>
			</Card>
		</Container>
	);
};

export default Dashboard;
