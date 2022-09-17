import styled from 'styled-components';

export const LinearGradientBorder = styled.div`
	width: 100%;

	background: linear-gradient(90deg, #9572fc 0%, #43e7ad 35%, #e1d55d 100%);

	padding-top: 0.25rem;
	border-radius: 8px;

	margin-top: 2rem;
`;

export const NewAdContainer = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	background: ${props => props.theme.background};

	padding: 1.5rem 2rem;

	border-radius: 8px 8px 6px 6px;

	> div {
		h1 {
			font-size: 1.5rem;
			font-weight: 900;

			color: ${props => props.theme.white};

			line-height: 1.6;
		}

		p {
			color: ${props => props.theme['subtitle-400']};

			line-height: 1.6;
		}
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;

		color: ${props => props.theme.white};
		background: ${props => props.theme.violet};

		padding: 0.75rem 1rem;

		border-radius: 6px;
	}
`;
