import { LoadingContainer } from './styles';
import { GameController } from 'phosphor-react';

export function Loading() {
	return (
		<LoadingContainer>
			<GameController size={20} weight="fill" />
		</LoadingContainer>
	);
}
