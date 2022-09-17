import { Request, Response } from 'express';
import { AdsRepository } from '../../repositories/AdsRepository';
import { CreateAdUseCase } from './CreateAdUseCase';

export class CreateAdController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id: game_id } = request.params;

		const {
			name,
			yearsPlaying,
			discord,
			weekDays,
			hourStart,
			hourEnd,
			useVoiceChannel,
		} = request.body;

		const adsRepository = new AdsRepository();
		const createAdUseCase = new CreateAdUseCase(adsRepository);

		const ad = await createAdUseCase.execute({
			name,
			discord,
			yearsPlaying,
			weekDays,
			hourStart,
			hourEnd,
			useVoiceChannel,
			game_id,
		});

		return response.status(201).json(ad);
	}
}
