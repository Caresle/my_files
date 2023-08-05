import {
	FC
} from "react";
import {
	Button,
	Card,
	CardContent,
	Container,
	SxProps,
	Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export enum EColorCard {
	Red = "red",
	Pink = "pink",
	Orange = "orange",
	Purple = "purple",
}
interface IDashboardItem {
	title: string;
	color: EColorCard;
	route: string;
}


export const DashboardItem : FC<IDashboardItem> = (props: IDashboardItem) => {
	const { title, color, route } = props;
	const navigate = useNavigate();

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

	const changeRoute = () => {
		navigate(route);
	};

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
						onClick={changeRoute}
					>
						Go
					</Button>
				</CardContent>
			</Card>
		</Container>
	);
};
