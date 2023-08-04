import { FC } from "react";
import Home from "./views/Home";
import About from "./views/About";
import Login from "./views/Login";

// Icons
import {
	Home as IconHome,
	Info as IconInfo,
	Login as IconLogin,
	Settings as IconSettings,
	UploadFile as IconFile,
} from '@mui/icons-material';
import Settings from "./views/Settings";
import FilesView from "./views/FilesView";
interface IMetaData {
	name?: string;
	required?: Array<number | null>;
	icon: FC;
	show?: boolean;
}

export interface IRouteItem {
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
			icon: IconHome,
			show: true,
		}
	},
	{
		name: 'Files',
		path: '/files',
		component: FilesView,
		meta: {
			icon: IconFile,
			show: true,
		}
	},
	{
		name: 'Settings',
		path: '/settings',
		component: Settings,
		meta: {
			icon: IconSettings,
			show: true,
		}
	},
	{
		name: 'About',
		path: '/about',
		component: About,
		meta: {
			icon: IconInfo,
			show: true,
		}
	},
	{
		name: 'Login',
		path: '/login',
		component: Login,
		meta: {
			icon: IconLogin,
			show: false
		}
	}
];

export default routes;
