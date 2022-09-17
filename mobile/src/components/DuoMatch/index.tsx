import React, { useState } from 'react';
import {
	View,
	Modal,
	ModalBaseProps,
	ModalProps,
	Text,
	TouchableOpacity,
	Alert,
} from 'react-native';
import { Loading } from '../Loading';

import * as Clipboard from 'expo-clipboard';

import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native';

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface IDuoMatchProps extends ModalProps {
	discord: string;
	onClose(): void;
}

export function DuoMatch({ discord, onClose, ...rest }: IDuoMatchProps) {
	const [isCopying, setIsCopying] = useState(false);

	async function handleCopyDiscordToClipboard() {
		setIsCopying(true);

		await Clipboard.setStringAsync(discord);

		Alert.alert(
			'Discord copiado!',
			'Usuário do discord copiado para a área de transferência'
		);

		setIsCopying(false);
	}

	return (
		<Modal {...rest} transparent statusBarTranslucent animationType="fade">
			<View style={styles.container}>
				<View style={styles.content}>
					<TouchableOpacity
						style={styles.closeIcon}
						onPress={onClose}
					>
						<MaterialIcons
							name="close"
							size={20}
							color={THEME.COLORS.CAPTION_500}
						/>
					</TouchableOpacity>

					<CheckCircle
						size={64}
						color={THEME.COLORS.SUCCESS}
						weight="bold"
					/>

					<Heading
						title="Let's play!"
						subtitle="Agora é só começar a jogar!"
						style={{ alignItems: 'center', marginTop: 24 }}
					/>

					<Text style={styles.label}>Adicione no Discord</Text>

					<TouchableOpacity
						style={styles.discordButton}
						onPress={handleCopyDiscordToClipboard}
						disabled={isCopying}
					>
						<Text style={styles.discord}>
							{isCopying ? <Loading /> : discord}
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
}
