import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FC } from "react";
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Common/Navbar'
import routes from './router'
import useThemeAppStore from './store/themeAppStore';
import customThemeColors from './config/customThemeColors';


const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: customThemeColors.palette?.primary,
		secondary: customThemeColors.palette?.secondary,
		background: {
			default: '#232323',
		}
	}
});

const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: customThemeColors.palette?.primary,
		secondary: customThemeColors.palette?.secondary,
	}
});

const App : FC = () => {
	const useDark = useThemeAppStore(state => state.useDark);

	return (
		<ThemeProvider theme={useDark ? darkTheme : lightTheme}>
			<CssBaseline />
			<BrowserRouter>
				<Navbar />
				<Routes>
					{
						routes.map(e => {
							return <Route path={e.path} Component={e.component} key={e.path} />
						})
					}
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
