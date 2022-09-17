import { Ad } from '@prisma/client';
import {
	IAdsRepository,
	ICreateAdData,
} from '../../repositories/IAdsRepository';

export class CreateAdUseCase {
	constructor(private adsRepository: IAdsRepository) {}

	async execute(data: ICreateAdData): Promise<Ad> {
		// validate data
		const ad = await this.adsRepository.create(data);

		return ad;
	}
}
