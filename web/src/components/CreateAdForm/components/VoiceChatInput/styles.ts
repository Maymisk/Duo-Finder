import styled from 'styled-components';
import { Root } from '@radix-ui/react-checkbox';

export const VoiceChatInputContainer = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	gap: 0.5rem;

	color: ${props => props.theme.white};

	font-size: 0.875rem;

	margin-top: 0.5rem;
`;

export const VoiceChatCheckbox = styled(Root)`
	width: 1.5rem;
	height: 1.5rem;

	background: ${props => props.theme.input};

	border-radius: 4px;

	padding: 0.25rem;
`;
