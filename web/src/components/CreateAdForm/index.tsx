import { Container, Input, LabelContainer } from './styles';

import { AvailabilityInputs } from './components/AvailabilityInputs';
import { FormControlButtons } from './components/FormControlButtons';
import { VoiceChatInput } from './components/VoiceChatInput';
import { YearsAndDiscordInputs } from './components/YearsAndDiscordInputs';
import { GameInput } from './components/GameInput';
import { api } from '../../services/api';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../validation/createAdFormValidationSchema';

interface ICreateAdFormData {
	gameId: string;
	name: string;
	yearsPlaying: number;
	discord: string;
	weekDays: string[];
	hourStart: string;
	hourEnd: string;
	useVoiceChannel: boolean;
}

interface ICreateAdFormProps {
	onClose(): void;
}

export function CreateAdForm({ onClose }: ICreateAdFormProps) {
	const adForm = useForm<ICreateAdFormData>({
		resolver: yupResolver(schema),
		defaultValues: {
			useVoiceChannel: false,
		},
	});

	async function handleFormSubmission(data: ICreateAdFormData) {
		const {
			gameId,
			name,
			discord,
			yearsPlaying,
			weekDays,
			hourStart,
			hourEnd,
			useVoiceChannel,
		} = data;
		const numberWeekDays = weekDays.map(Number);

		await api.post(`/ads/game/${gameId}`, {
			name,
			discord,
			yearsPlaying,
			hourStart,
			hourEnd,
			useVoiceChannel,
			weekDays: numberWeekDays,
		});

		onClose();
	}

	return (
		<Container onSubmit={adForm.handleSubmit(handleFormSubmission)}>
			<LabelContainer>
				<label htmlFor="game">Qual o game?</label>
				<Controller
					name="gameId"
					control={adForm.control}
					render={({ field }) => (
						<GameInput onValueChange={field.onChange} />
					)}
				/>
			</LabelContainer>

			<LabelContainer>
				<label htmlFor="name">Seu nome (ou nickname)</label>
				<Input
					id="name"
					placeholder="Como te chamam dentro do game?"
					autoComplete="off"
					{...adForm.register('name')}
				/>
			</LabelContainer>

			<FormProvider {...adForm}>
				<YearsAndDiscordInputs />

				<AvailabilityInputs />

				<VoiceChatInput />
			</FormProvider>

			<FormControlButtons />
		</Container>
	);
}
