import * as Select from '@radix-ui/react-select';
import { SelectProps } from '@radix-ui/react-select';

import { CaretDown, Check } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { api } from '../../../../services/api';
import {
	Item,
	ItemIndicator,
	ItemsContainer,
	SelectedItemDisplay,
} from './styles';

interface IGame {
	id: string;
	title: string;
}

interface IGameInputProps extends SelectProps {}

export function GameInput({ ...props }: IGameInputProps) {
	const [games, setGames] = useState<IGame[]>([]);

	useEffect(() => {
		async function fetchGames() {
			const response = await api.get('games');

			setGames(response.data);
		}

		fetchGames();
	}, []);

	return (
		<Select.Root {...props}>
			<SelectedItemDisplay>
				<Select.Value placeholder="Selecione o game que deseja jogar" />
				<Select.Icon>
					<CaretDown size={24} />
				</Select.Icon>
			</SelectedItemDisplay>

			<Select.Portal>
				<ItemsContainer>
					<Select.Viewport>
						{games.map(game => {
							return (
								<Item key={game.id} value={game.id}>
									<ItemIndicator>
										<Check size={16} color="#34D399" />
									</ItemIndicator>

									<Select.ItemText>
										{game.title}
									</Select.ItemText>
								</Item>
							);
						})}
					</Select.Viewport>
				</ItemsContainer>
			</Select.Portal>
		</Select.Root>
	);
}
