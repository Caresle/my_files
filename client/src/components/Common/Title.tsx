import { FC } from "react";
import {
	Typography
} from "@mui/material";

interface ITitleProps {
	title: string;
}

const Title : FC<ITitleProps> = (props: ITitleProps) => {
	const { title } = props;

	return (
		<Typography variant='h2' textAlign={'center'}>
			{ title }
		</Typography>
	);
};

export default Title;
