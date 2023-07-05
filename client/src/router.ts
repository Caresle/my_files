import { FC } from "react";
import Home from "./views/Home";
import About from "./views/About";

interface IMetaData {
	name?: string;
	required?: Array<number | null>;
	icon?: string;
	show?: boolean;
}

interface IRouteItem {
	name: string;
	path: string;
	component: FC;
	meta?: IMetaData;
}

const routes : Array<IRouteItem> = [
	{
		name: 'Home',
		path: '/',
		component: Home,
	},
	{
		name: 'About',
		path: '/about',
		component: About
	}
];

export default routes;