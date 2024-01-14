import styled from 'styled-components';

export const LoadingContainer = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	@keyframes scaleUpAndDown {
		from {
			transform: scale(1) rotate(0deg);
		}

		to {
			transform: scale(2.2) rotate(360deg);
		}
	}

	svg {
		color: ${props => props.theme.white};

		animation: scaleUpAndDown cubic-bezier(0.96, -0.05, 0.27, 1.03)
			alternate infinite 1s;
	}
`;
