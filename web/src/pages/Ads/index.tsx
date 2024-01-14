import { AdsContainer } from './styles';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { number } from 'yup/lib/locale';
import { AdCard } from './components/AdCard';
import { Loading } from '../../components/Loading';

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

export function Ads() {
	const [ads, setAds] = useState<IAd[]>([]);
	const [isFetching, setIsFetching] = useState(false);
	const { id } = useParams();

	useEffect(() => {
		async function fetchAds() {
			setIsFetching(true);

			const response = await api.get(`ads/game/${id}`);

			setAds(response.data);

			setIsFetching(false);
		}

		fetchAds();
	}, []);

	return (
		<AdsContainer>
			<h1>League of Legends</h1>

			<strong>Encontre seu duo agora!</strong>

			{isFetching ? (
				<Loading />
			) : (
				ads.map(ad => {
					return <AdCard ad={ad} />;
				})
			)}
		</AdsContainer>
	);
}
