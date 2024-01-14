import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface ICardProps {
	backgroundimageurl: string;
}

export const Card = styled(NavLink)<ICardProps>`
	width: 11.25rem;
	height: 15rem;

	position: relative;

	background: url(${props => props.backgroundimageurl}) no-repeat center/cover;

	border-radius: 8px;
`;

export const CardOverlay = styled.footer`
	height: 120px;

	position: absolute;
	right: 0;
	left: 0;
	bottom: 0;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 0) 0%,
		rgba(0, 0, 0, 0.9) 67.08%
	);

	border-radius: 0px 0px 6px 6px;

	padding: 0 1rem 1rem;

	h1 {
		font-size: 1rem;
		font-weight: 700;

		color: ${props => props.theme.white};
	}

	p {
		font-size: 0.875rem;

		color: ${props => props.theme['subtitle-300']};

		margin-top: 0.25rem;
	}
`;
