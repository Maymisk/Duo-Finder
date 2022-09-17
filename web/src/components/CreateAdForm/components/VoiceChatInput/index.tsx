import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import { VoiceChatCheckbox, VoiceChatInputContainer } from './styles';
import { Controller, useFormContext } from 'react-hook-form';

export function VoiceChatInput() {
	const { control } = useFormContext();

	return (
		<Controller
			name="useVoiceChannel"
			control={control}
			render={({ field }) => {
				return (
					<VoiceChatInputContainer>
						<VoiceChatCheckbox onCheckedChange={field.onChange}>
							<Checkbox.Indicator>
								<Check
									size={16}
									color="#34D399"
									weight="bold"
								/>
							</Checkbox.Indicator>
						</VoiceChatCheckbox>
						Costumo me conectar ao chat de voz
					</VoiceChatInputContainer>
				);
			}}
		/>
	);
}
