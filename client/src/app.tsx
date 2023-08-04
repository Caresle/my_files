import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FC } from "react";
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Common/Navbar'
import routes from './router'
import useThemeAppStore from './store/themeAppStore';

const darkTheme = createTheme({
	palette: {
		mode: 'dark'
	}
});

const lightTheme = createTheme({
	palette: {
		mode: 'light'
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
