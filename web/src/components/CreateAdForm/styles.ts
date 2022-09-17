import styled from 'styled-components';
import { Root } from '@radix-ui/react-checkbox';

export const Container = styled.form`
	margin-top: 1rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
`;

export const LabelContainer = styled.div`
	width: 100%;

	label {
		color: ${props => props.theme.white};
	}
`;

export const Input = styled.input`
	width: 100%;
	height: 50px;

	display: block;

	background: ${props => props.theme.input};
	color: ${props => props.theme.white};

	font-size: 0.875rem;

	padding: 0.75rem 1rem;

	border-radius: 4px;

	margin-top: 0.5rem;

	&::placeholder {
		color: ${props => props.theme.placeholder};
	}

	&:focus {
		outline: none;
	}
`;
