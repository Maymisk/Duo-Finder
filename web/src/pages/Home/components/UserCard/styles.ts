import styled from 'styled-components';

export const UserCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	margin-top: 5rem;
	padding: 1rem;

	border-radius: 8px;
`;

export const UserInfoContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	margin: 0 auto;

	h3 {
		font-weight: 600;
		font-size: 1.5rem;

		background: linear-gradient(
			90deg,
			#9572fc 0%,
			#43e7ad 35%,
			#e1d55d 100%
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;

		text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.6);
	}

	img {
		width: 50px;
		height: 50px;

		border-radius: 9999px;

		box-shadow: 4px 2px 5px 0px rgba(0, 0, 0, 0.75);
		-webkit-box-shadow: 4px 2px 5px 0px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 4px 2px 5px 0px rgba(0, 0, 0, 0.75);
	}
`;
