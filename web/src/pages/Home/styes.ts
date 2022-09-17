import styled from 'styled-components';

export const HomeContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-top: 5rem;

	> h1 {
		font-size: 4rem;
		font-weight: 900;

		color: ${props => props.theme.white};

		span {
			background: linear-gradient(
				90deg,
				#9572fc 0%,
				#43e7ad 35%,
				#e1d55d 100%
			);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
		}
	}
`;

export const GameCarousel = styled.div`
	width: 100%;

	display: grid;
	grid-template-columns: repeat(auto-fit, 11.25rem);
	gap: 1.5rem;

	margin: 4rem auto 0;
`;
