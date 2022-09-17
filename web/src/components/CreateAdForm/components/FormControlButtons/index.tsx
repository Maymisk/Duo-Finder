import { Close } from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';
import { ButtonsContainer } from './styles';

export function FormControlButtons() {
	return (
		<ButtonsContainer>
			<Close type="button">Cancelar</Close>

			<button type="submit">
				<GameController size={20} />
				Encontrar duo
			</button>
		</ButtonsContainer>
	);
}
