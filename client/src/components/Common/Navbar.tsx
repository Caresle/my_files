import { FC, useState } from "react";
import { Link } from 'react-router-dom';
import routes, { IRouteItem } from "../../router";
import {
	AppBar,
	Toolbar,
	IconButton,
	Drawer,
	ListItem,
	ListItemButton,
	ListItemIcon,
	Typography,
} from '@mui/material';

import {
	Menu as MenuIcon,
	DarkMode as DarkModeIcon,
	LightMode as LightModeIcon,
} from '@mui/icons-material'
import useThemeAppStore from "../../store/themeAppStore";


const Navbar : FC = () => {
	const [drawer, setDrawer] = useState(false);

	const themeStore = useThemeAppStore(state => state);

	const openDrawer = (value: boolean) => {
		setDrawer(value);
	};

	const textColor = () => {
		return themeStore.useDark ? 'white' : 'dark';
	};

	const getIcon = (e: IRouteItem) => {
		return e.meta?.icon ? <e.meta.icon /> : <></>
	};

	const generateRoutes = (e : IRouteItem) => {
		if (e.meta?.show) {
			return (
				<ListItem key={e.path}>
					<Link
						to={e.path} style={{
							textDecoration: 'none',
							color: 'ButtonText',
							width: '100%'
						}}
						onClick={() => openDrawer(false)}
					>
						<ListItemButton>
							<ListItemIcon>
								{ getIcon(e) }
							</ListItemIcon>
							<Typography variant="body1" sx={{
								color: textColor
							}}>
								{e.name}
							</Typography>
						</ListItemButton>
					</Link>
				</ListItem>
			)
		}
	};

	return (
		<>
			<AppBar position="static" color="default">
				<Toolbar>
					<IconButton onClick={() => openDrawer(true)}>
						<MenuIcon />
					</IconButton>
					<IconButton onClick={themeStore.changeTheme}>
						{
							themeStore.useDark ?
								<LightModeIcon />
								: <DarkModeIcon />
						}
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer anchor="left" open={ drawer } onClose={() => openDrawer(false)}
			>
				<nav>
					<ul>
						{ routes.map(generateRoutes) }
					</ul>
				</nav>
			</Drawer>
		</>
	);
};

export default Navbar;
