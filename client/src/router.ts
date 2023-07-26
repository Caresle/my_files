import { FC } from "react";
import Home from "./views/Home";
import About from "./views/About";
import Login from "./views/Login";

// Icons
import {
	Home as IconHome,
	Info as IconInfo,
	Login as IconLogin,
} from '@mui/icons-material';
interface IMetaData {
	name?: string;
	required?: Array<number | null>;
	icon: FC;
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
		meta: {
			icon: IconHome
		}
	},
	{
		name: 'About',
		path: '/about',
		component: About,
		meta: {
			icon: IconInfo,
		}
	},
	{
		name: 'Login',
		path: '/login',
		component: Login,
		meta: {
			icon: IconLogin,
		}
	}
];

export default routes;
