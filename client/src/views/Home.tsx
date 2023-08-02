import { FC } from "react";
import Title from "../components/Common/Title";
import Dashboard from "../components/home/Dashboard";

const Home : FC = () => {
	return (
		<div>
			<Title title="Home View" />
			<Dashboard />
		</div>
	)
};

export default Home;
