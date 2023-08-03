import {
	FC
} from "react";
import {
	Button,
	Card,
	CardContent,
	Container,
	Typography
} from "@mui/material";

export enum EColorCard {
	Red = "red",
	Pink = "pink",
	Orange = "orange",
	Purple = "purple",
}
interface IDashboardItem {
	title: string;
	color: EColorCard;
}


export const DashboardItem : FC<IDashboardItem> = (props: IDashboardItem) => {
	const { title, color } = props;

	return (
		<Container maxWidth={"sm"} sx={{ my: 2 }}>
			<Card variant="outlined" sx={{
				backgroundColor: color,
				borderColor: color,
				color: "white"
			}}
			>
				<CardContent>
					<Typography sx={{
						textAlign: "center",
					}} variant="h5">
						{ title }
					</Typography>
					<Button variant="contained"
						sx={{
							backgroundColor: "white",
							color: "black",
							":focus-within": {
								backgroundColor: "purple",
								color: "red",
							}
						}}
					>Go</Button>
				</CardContent>
			</Card>
		</Container>
	);
};
