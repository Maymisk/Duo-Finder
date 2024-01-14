import { AdCardContainer } from './styles';

interface IAd {
	id: string;
	name: string;
	yearsPlaying: number;
	weekDays: number[];
	hourStart: number;
	hourEnd: number;
	useVoiceChannel: boolean;
	createdAt: Date;
}

interface IAdCardProps {
	ad: IAd;
}

export function AdCard({ ad }: IAdCardProps) {
	return (
		<AdCardContainer>
			<h2>Meu nome é:</h2>
			<span>{ad.name}</span>

			<h2>Meu discord:</h2>
			<span>{ad.discord}</span>
		</AdCardContainer>
	);
}
