import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthContextProvider } from './contexts/AuthContext';
import { Home } from './pages/Home';
import { Router } from './routes';
import { Container } from './styles/app';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/defaultTheme';

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<AuthContextProvider>
				<BrowserRouter>
					<Container>
						<Router />

						<GlobalStyle />
					</Container>
				</BrowserRouter>
			</AuthContextProvider>
		</ThemeProvider>
	);
}
