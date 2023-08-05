import { FC } from "react";
import {
	Card,
	CardContent,
	Container,
} from "@mui/material";
import { DashboardItem, EColorCard } from "./DashboardItem";
import { getRoutePath } from "../../router";

const Dashboard : FC = () => {
	return (
		<Container>
			<Card variant="outlined">
				<CardContent sx={{
					display: "flex"
				}}>
					<DashboardItem title="Files" color={EColorCard.Red} route={getRoutePath('files')} />
					<DashboardItem title="Settings" color={EColorCard.Orange} route={getRoutePath('settings')} />
					<DashboardItem title="About" color={EColorCard.Purple} route={getRoutePath('about')} />
				</CardContent>
			</Card>
		</Container>
	);
};

export default Dashboard;
