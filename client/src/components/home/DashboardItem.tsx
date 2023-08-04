import {
	FC
} from "react";
import {
	Button,
	Card,
	CardContent,
	Container,
	SxProps,
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

	const itemButtonStyle : SxProps = () => ({
		boxShadow: "none",
		backgroundColor: "white",
		mt: 4,
		color: "black",
		border: "solid",
		borderColor: "white",
		borderWidth: 1,
		":hover": {
			boxShadow: "none",
			backgroundColor: color,
			color: "white",
			border: "solid",
			borderColor: "white",
			borderWidth: 1,
		}
	});

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
						fullWidth
						sx={itemButtonStyle}
					>Go</Button>
				</CardContent>
			</Card>
		</Container>
	);
};
