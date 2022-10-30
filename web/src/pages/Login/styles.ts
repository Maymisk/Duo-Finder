import styled from 'styled-components';
import { darken } from 'polished';

export const LoginContainer = styled.div`
	max-width: 300px;

	margin: 10rem auto 0;
	padding: 2rem;

	border-radius: 8px;

	display: flex;
	align-items: center;
	justify-content: center;

	background: ${props => props.theme.background};
`;

export const LoginButton = styled.button`
	background: ${props => props.theme.violet};
	color: ${props => props.theme.white};

	border-radius: 8px;

	font-weight: 600;

	padding: 1rem;

	display: flex;
	align-items: center;
	gap: 1rem;

	transition: background-color 0.2s;

	&:hover {
		background: ${props => darken(0.05, props.theme.violet)};
	}

	svg {
		color: ${props => props.theme.white};
	}
`;
