import { Request, Response } from 'express';
import { AdsRepository } from '../../repositories/AdsRepository';
import { GetDiscordByAdIdUseCase } from './GetDiscordByAdIdUseCase';

export class GetDiscordByAdIdController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id: adId } = request.params;

		const adsRepository = new AdsRepository();
		const getDiscordByAdIdUseCase = new GetDiscordByAdIdUseCase(
			adsRepository
		);

		const discord = await getDiscordByAdIdUseCase.execute(adId);

		return response.json(discord);
	}
}
