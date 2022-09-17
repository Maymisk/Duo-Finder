import { LinearGradientBorder, NewAdContainer } from './styles';
import { Trigger } from '@radix-ui/react-dialog';

export function CreateAdBanner() {
	return (
		<LinearGradientBorder>
			<NewAdContainer>
				<div>
					<h1>Não encontrou seu duo?</h1>
					<p>Publique um anúncio para encontrar novos players!</p>
				</div>

				<Trigger>Publicar anúncio</Trigger>
			</NewAdContainer>
		</LinearGradientBorder>
	);
}
