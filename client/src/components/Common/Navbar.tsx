import { FC, useState } from "react";
import { Link } from 'react-router-dom';
import routes from "../../router";
import {
	AppBar,
	Toolbar,
	IconButton,
	Drawer,
	ListItem,
	ListItemButton,
} from '@mui/material';

import { Menu as MenuIcon } from '@mui/icons-material'

const Navbar : FC = () => {
	const [drawer, setDrawer] = useState(false);

	const openDrawer = (value: boolean) => {
		setDrawer(value);
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
						{
							routes.map(e => {
								return (
									<ListItem key={e.path}>
										<ListItemButton>
											<Link to={e.path}>{e.name}</Link>
										</ListItemButton>
									</ListItem>
								)
							})
						}
					</ul>
				</nav>
			</Drawer>
		</>
	);
};

export default Navbar;
