import { Card, CardOverlay } from './styles';

interface IGameCardProps {
	backgroundImageUrl: string;
	adsAmount: number | string;
	game: {
		id: string;
		title: string;
	};
}

export function GameCard({
	backgroundImageUrl,
	game,
	adsAmount,
}: IGameCardProps) {
	return (
		<Card
			backgroundimageurl={backgroundImageUrl}
			to={`/ads/game/${game.id}`}
		>
			<CardOverlay>
				<h1>{game.title}</h1>
				<p>{adsAmount} anúncios</p>
			</CardOverlay>
		</Card>
	);
}
