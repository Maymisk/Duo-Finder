import { GameCard } from './components/GameCard';
import { GameCarousel, HomeContainer } from './styes';

import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal } from '../../components/CreateAdModal';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

interface IGame {
	id: string;
	title: string;
	bannerUrl: string;
	_count: {
		ads: number;
	};
}

export function Home() {
	const [games, setGames] = useState<IGame[]>([]);
	const [createAdModalIsOpen, setCreateAdModalIsOpen] = useState(false);

	function onClose() {
		setCreateAdModalIsOpen(false);
	}

	useEffect(() => {
		async function fetchGames() {
			const response = await api.get('games');

			setGames(response.data);
		}

		fetchGames();
	}, []);

	return (
		<HomeContainer>
			<h1>
				Seu <span>duo</span> está aqui.
			</h1>

			<GameCarousel>
				{games.map(game => {
					return (
						<GameCard
							key={game.id}
							backgroundImageUrl={game.bannerUrl}
							adsAmount={game._count.ads}
							gameTitle={game.title}
						/>
					);
				})}
			</GameCarousel>

			<CreateAdModal
				open={createAdModalIsOpen}
				onClose={onClose}
				onOpenChange={setCreateAdModalIsOpen}
			>
				<CreateAdBanner />
			</CreateAdModal>
		</HomeContainer>
	);
}
