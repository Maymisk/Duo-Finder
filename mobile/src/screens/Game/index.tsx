import { Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
	FlatList,
	Image,
	Text,
	TouchableOpacity,
	View,
	ImageBackground,
} from 'react-native';

import { Background } from '../../components/Background';

import { IGameParams } from '../../@types/navigation';
import { THEME } from '../../theme';
import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png';
import { DuoCard } from '../../components/DuoCard';
import { Heading } from '../../components/Heading';
import { DuoMatch } from '../../components/DuoMatch';

export interface IAd {
	id: string;
	name: string;
	hourStart: string;
	hourEnd: string;
	weekDays: number[];
	useVoiceChannel: boolean;
	yearsPlaying: number;
}

export function Game() {
	const [ads, setAds] = useState<IAd[]>([]);
	const [discordDuoSelected, setDiscordDuoSelected] = useState('');

	const navigation = useNavigation();
	const route = useRoute();

	const game = route.params as IGameParams;

	function handleGoBack() {
		navigation.goBack();
	}

	async function getDiscordUser(adId: string) {
		async function fetchDiscord() {
			const response = await fetch(
				`http://172.30.64.1:3000/ads/${adId}/discord`
			);

			const data = await response.json();

			setDiscordDuoSelected(data.discord);
		}

		fetchDiscord();
	}

	useEffect(() => {
		async function fetchGames() {
			const response = await fetch(
				`http://172.30.64.1:3000/ads/game/${game.id}`
			);

			const data = await response.json();

			setAds(data);
		}

		fetchGames();
	}, []);

	return (
		<Background>
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={handleGoBack}>
						<Entypo
							name="chevron-thin-left"
							color={THEME.COLORS.CAPTION_300}
							size={20}
						/>
					</TouchableOpacity>

					<Image source={logoImg} style={styles.logo} />

					<View style={styles.right} />
				</View>

				<Image
					source={{ uri: game.bannerUrl }}
					style={styles.cover}
					resizeMode="cover"
				/>

				<Heading
					title={game.title}
					subtitle="Conecte-se e comece a jogar!"
				/>

				<FlatList
					data={ads}
					keyExtractor={item => item.id}
					renderItem={({ item }) => {
						return (
							<DuoCard
								data={{ ...item }}
								onConnect={() => getDiscordUser(item.id)}
							/>
						);
					}}
					contentContainerStyle={
						ads.length > 0
							? styles.contentList
							: styles.emptyListContent
					}
					style={styles.containerList}
					horizontal
					showsHorizontalScrollIndicator={false}
					ListEmptyComponent={() => (
						<Text style={styles.emptyListText}>
							Não há anúncios publicados ainda.
						</Text>
					)}
				/>

				<DuoMatch
					visible={discordDuoSelected.length > 0}
					onClose={() => setDiscordDuoSelected('')}
					discord={discordDuoSelected}
				/>
			</View>
		</Background>
	);
}
