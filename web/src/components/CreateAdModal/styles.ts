import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
	position: fixed;
	inset: 0;

	background: rgb(0, 0, 0, 0.6);
`;

export const Title = styled(Dialog.Title)`
	color: ${props => props.theme.white};

	font-size: 2rem;
	font-weight: 900;

	line-height: 1.6;
`;

export const Content = styled(Dialog.Content)`
	width: 500px;

	background: ${props => props.theme.background};

	border-radius: 8px;

	padding: 2rem 2.5rem;

	display: flex;
	flex-direction: column;
	gap: 1rem;

	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

	position: fixed;
	left: 50%;
	top: 50%;
	translate: -50% -50%;
`;

export const Trigger = styled(Dialog.Trigger)`
	width: 100px;
	height: 100px;

	background: red;
`;
