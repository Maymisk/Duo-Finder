import { DiscordLogo } from 'phosphor-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { LoginButton, LoginContainer } from './styles';

export function Login() {
	const navigate = useNavigate();
	const { signIn, isAuthenticated } = useAuth();

	useEffect(() => {
		signIn();
	}, []);

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/home');
		}
	}, [isAuthenticated]);

	async function handleLogin() {
		window.location.href =
			import.meta.env.VITE_DISCORD_AUTHENTICATION_CODE_URL;
	}

	return (
		<LoginContainer>
			<LoginButton onClick={handleLogin}>
				Logar com discord <DiscordLogo size={20} weight="fill" />
			</LoginButton>
		</LoginContainer>
	);
}
