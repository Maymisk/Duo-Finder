import { Ad } from '@prisma/client';
import {
	IAdsRepository,
	ListByGameReturnType,
} from '../../repositories/IAdsRepository';

export class ListAdsByGameUseCase {
	constructor(private adsRepository: IAdsRepository) {}

	async execute(game_id: string): Promise<ListByGameReturnType[]> {
		const ads = await this.adsRepository.listByGame(game_id);

		return ads;
	}
}
