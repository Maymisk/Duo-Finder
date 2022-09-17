import { Request, Response } from 'express';
import { AdsRepository } from '../../repositories/AdsRepository';
import { ListAdsByGameUseCase } from './LIstAdsByGameUseCase';

export class ListAdsByGameController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id: game_id } = request.params;

		const adsRepository = new AdsRepository();
		const listAdsByGameUseCase = new ListAdsByGameUseCase(adsRepository);

		const ads = await listAdsByGameUseCase.execute(game_id);

		return response.json(ads);
	}
}
