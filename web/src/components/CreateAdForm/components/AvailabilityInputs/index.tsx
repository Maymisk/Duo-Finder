import { LabelContainer } from '../../styles';
import {
	Container,
	TimeInput,
	TimeInputsContainer,
	ToggleGroup,
	ToggleItem,
} from './styles';
import { Controller, useFormContext } from 'react-hook-form';

export function AvailabilityInputs() {
	const { register, control } = useFormContext();

	return (
		<Container>
			<LabelContainer>
				<label>Quando costuma jogar?</label>
				<Controller
					name="weekDays"
					control={control}
					render={({ field }) => {
						return (
							<ToggleGroup
								type="multiple"
								onValueChange={field.onChange}
							>
								<ToggleItem title="Domingo" value="0">
									D
								</ToggleItem>

								<ToggleItem title="Segunda" value="1">
									S
								</ToggleItem>

								<ToggleItem title="Terça" value="2">
									T
								</ToggleItem>

								<ToggleItem title="Quarta" value="3">
									Q
								</ToggleItem>

								<ToggleItem title="Quinta" value="4">
									Q
								</ToggleItem>

								<ToggleItem title="Sexta" value="5">
									S
								</ToggleItem>

								<ToggleItem title="Sábado" value="6">
									S
								</ToggleItem>
							</ToggleGroup>
						);
					}}
				/>
			</LabelContainer>

			<LabelContainer>
				<label htmlFor="hourStart">Qual horário do dia?</label>

				<TimeInputsContainer>
					<TimeInput
						type="text"
						id="hourStart"
						autoComplete="off"
						placeholder="De"
						{...register('hourStart')}
					/>
					<TimeInput
						type="text"
						autoComplete="off"
						placeholder="Até"
						{...register('hourEnd')}
					/>
				</TimeInputsContainer>
			</LabelContainer>
		</Container>
	);
}
