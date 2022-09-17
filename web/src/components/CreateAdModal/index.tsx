import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import { CreateAdForm } from '../CreateAdForm';
import { Content, Overlay, Title, Trigger } from './styles';

interface ICreateAdModalProps extends Dialog.DialogProps {
	children: ReactNode;
	onClose(): void;
}

export function CreateAdModal({
	children,
	onClose,
	...rest
}: ICreateAdModalProps) {
	return (
		<Dialog.Root {...rest}>
			{children}

			<Dialog.Portal>
				<Overlay />

				<Content>
					<Title>Publique um anúncio</Title>

					<CreateAdForm onClose={onClose} />
				</Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
