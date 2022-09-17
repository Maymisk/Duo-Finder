import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, Image, View } from 'react-native';

import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';

import { Background } from '../../components/Background';
import { GameCard } from '../../components/GameCard';

interface IGame {
	id: string;
	title: string;
	_count: {
		ads: number;
	};
	bannerUrl: string;
}

export function Home() {
	const [games, setGames] = useState<IGame[]>([]);

	const navigation = useNavigation();

	function handleOpenGame({ id, title, bannerUrl }: IGame) {
		navigation.navigate('game', { id, title, bannerUrl });
	}

	useEffect(() => {
		async function fetchGames() {
			const response = await fetch('http://172.30.64.1:3000/games');

			const data = await response.json();

			setGames(data);
		}

		fetchGames();
	}, []);

	return (
		<Background>
			<View style={styles.container}>
				<Image source={logoImg} style={styles.logo} />

				<Heading
					title="Encontre seu duo"
					subtitle="Selecione o game que deseja jogar..."
				/>

				<FlatList
					data={games}
					keyExtractor={item => item.id}
					renderItem={({ item }) => {
						return (
							<GameCard
								data={item}
								onPress={() => handleOpenGame(item)}
							/>
						);
					}}
					showsHorizontalScrollIndicator={false}
					horizontal
					contentContainerStyle={styles.contentList}
				/>
			</View>
		</Background>
	);
}
