import { FC } from "react";
import {
	Card,
	CardContent,
	Container,
} from "@mui/material";
import { DashboardItem, EColorCard } from "./DashboardItem";

const Dashboard : FC = () => {
	return (
		<Container>
			<Card variant="outlined">
				<CardContent sx={{
					display: "flex"
				}}>
					<DashboardItem title="Files" color={EColorCard.Red} />
					<DashboardItem title="Settings" color={EColorCard.Orange} />
					<DashboardItem title="About" color={EColorCard.Purple} />
				</CardContent>
			</Card>
		</Container>
	);
};

export default Dashboard;
