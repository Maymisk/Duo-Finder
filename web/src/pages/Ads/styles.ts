import styled from 'styled-components';

export const AdsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		color: ${props => props.theme.white};

		font-weight: 700;
		font-size: 2.5rem;
	}

	strong {
		color: ${props => props.theme.white};

		margin-top: 1rem;
		font-weight: 400;
	}
`;
