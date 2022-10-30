import * as Select from '@radix-ui/react-select';
import styled from 'styled-components';

export const SelectedItemDisplay = styled(Select.Trigger)`
	width: 100%;
	height: 50px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	background: ${props => props.theme.input};
	color: ${props => props.theme.white};

	font-size: 0.875rem;

	padding: 0.75rem 1rem;

	border-radius: 4px;

	margin-top: 0.5rem;

	&[data-placeholder] {
		color: ${props => props.theme.placeholder};
	}

	&:focus {
		outline: none;
	}

	svg:hover {
		color: ${props => props.theme.violet};
	}
`;

export const ItemsContainer = styled(Select.Content)`
	border-radius: 5px;

	background: ${props => props.theme.input};

	padding: 0.5rem;

	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const Item = styled(Select.Item)`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	color: ${props => props.theme.white};
	font-weight: 600;

	padding: 1rem;

	border-radius: 8px;

	cursor: pointer;

	&:hover {
		background: #131317;
	}
`;

export const ItemIndicator = styled(Select.ItemIndicator)`
	padding-top: 3px;
`;
