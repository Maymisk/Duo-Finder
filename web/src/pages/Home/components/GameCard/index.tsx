import { Card, CardOverlay } from './styles';

interface IGameCardProps {
	backgroundImageUrl: string;
	gameTitle: string;
	adsAmount: number | string;
}

export function GameCard({
	backgroundImageUrl,
	gameTitle,
	adsAmount,
}: IGameCardProps) {
	return (
		<Card backgroundImageUrl={backgroundImageUrl}>
			<CardOverlay>
				<h1>{gameTitle}</h1>
				<p>{adsAmount} anúncios</p>
			</CardOverlay>
		</Card>
	);
}
