import { ThemeProvider } from 'styled-components';
import { Home } from './pages/Home';
import { Container } from './styles/app';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/defaultTheme';

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Container>
				<Home />

				<GlobalStyle />
			</Container>
		</ThemeProvider>
	);
}
