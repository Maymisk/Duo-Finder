import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
	ImageBackground,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
} from 'react-native';

import { THEME } from '../../theme';
import { styles } from './styles';

interface IGameCardProps {
	id: string;
	title: string;
	_count: {
		ads: number;
	};
	bannerUrl: string;
}

interface IProps extends TouchableOpacityProps {
	data: IGameCardProps;
}

export function GameCard({ data, ...rest }: IProps) {
	return (
		<TouchableOpacity style={styles.container} {...rest}>
			<ImageBackground
				style={styles.cover}
				source={{ uri: data.bannerUrl }}
			>
				<LinearGradient
					colors={THEME.COLORS.FOOTER}
					style={styles.footer}
				>
					<Text style={styles.name}>{data.title}</Text>

					<Text style={styles.ads}>{data._count.ads} anúncios</Text>
				</LinearGradient>
			</ImageBackground>
		</TouchableOpacity>
	);
}
