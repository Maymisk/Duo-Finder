import styled from 'styled-components';
import { Input } from '../../styles';
import { Root, Item } from '@radix-ui/react-toggle-group';

export const Container = styled.div`
	width: 100%;

	display: flex;
	gap: 1.5rem;

	div:nth-of-type(2) {
		max-width: 168px;
	}
`;

export const ToggleGroup = styled(Root)`
	display: grid;
	grid-template-columns: repeat(auto-fit, 40px);
	gap: 0.25rem;

	margin-top: 0.5rem;
`;

export const ToggleItem = styled(Item)`
	width: 40px;
	height: 40px;

	padding: calc(0.375rem + 1px) 0.75rem;

	background: ${props => props.theme.input};
	color: ${props => props.theme.white};

	border-radius: 4px;

	transition: background-color 0.2s;

	&[data-state='on'] {
		background: ${props => props.theme.violet};
	}
`;

export const TimeInput = styled(Input)`
	height: 40px;
`;

export const TimeInputsContainer = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	gap: 0.375rem;
`;
