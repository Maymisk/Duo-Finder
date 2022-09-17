import { AppError } from '../../../../shared/error/AppError';
import { IAdsRepository } from '../../repositories/IAdsRepository';

export class GetDiscordByAdIdUseCase {
	constructor(private adsRepository: IAdsRepository) {}

	async execute(adId: string): Promise<{ discord: string }> {
		const discord = await this.adsRepository.getDiscordById(adId);

		if (!discord) {
			throw new AppError('Invalid ID');
		}

		return discord;
	}
}
