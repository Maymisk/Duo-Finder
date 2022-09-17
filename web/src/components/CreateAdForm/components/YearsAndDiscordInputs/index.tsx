import { Input, LabelContainer } from '../../styles';
import { Container } from './styles';
import { useFormContext } from 'react-hook-form';

export function YearsAndDiscordInputs() {
	const { register } = useFormContext();

	return (
		<Container>
			<LabelContainer>
				<label htmlFor="yearsPlaying">Joga há quantos anos?</label>
				<Input
					id="yearsPlaying"
					type="number"
					step="1"
					placeholder="Tudo bem ser ZERO"
					autoComplete="off"
					{...register('yearsPlaying', { valueAsNumber: true })}
				/>
			</LabelContainer>

			<LabelContainer>
				<label htmlFor="discord">Qual seu discord?</label>
				<Input
					id="discord"
					placeholder="Usuario#0000"
					autoComplete="off"
					{...register('discord')}
				/>
			</LabelContainer>
		</Container>
	);
}
