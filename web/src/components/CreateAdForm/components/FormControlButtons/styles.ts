import styled from 'styled-components';

export const ButtonsContainer = styled.footer`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 1rem;

	margin-top: 1rem;

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;

		padding: 0.75rem 1.25rem;

		border-radius: 6px;

		color: ${props => props.theme.white};

		font-weight: 600;

		&[type='submit'] {
			background: ${props => props.theme.violet};
		}

		&[type='button'] {
			background: ${props => props.theme.placeholder};
		}
	}
`;
