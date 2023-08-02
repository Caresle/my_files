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

import { Menu as MenuIcon } from '@mui/icons-material'

const Navbar : FC = () => {
	const [drawer, setDrawer] = useState(false);

	const openDrawer = (value: boolean) => {
		setDrawer(value);
	};

	const getIcon = (e: IRouteItem) => {
		return e.meta?.icon ? <e.meta.icon /> : <></>
	};

	const generateRoutes = (e : IRouteItem) => {
		if (e.meta?.show) {
			return (
				<ListItem key={e.path}>
					<Link to={e.path}>
						<ListItemButton>
							<ListItemIcon>
								{ getIcon(e) }
							</ListItemIcon>
							<Typography variant="body1">
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
				</Toolbar>
			</AppBar>
			<Drawer anchor="left" open={ drawer } onClose={() => openDrawer(false)}>
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
