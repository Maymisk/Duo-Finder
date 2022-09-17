import { Request, Response } from 'express';
import { GamesRepository } from '../../repositories/GamesRepository';
import { ListGamesUseCase } from './ListGamesUseCase';
import { Game } from '@prisma/client';

export class ListGamesController {
	async handle(request: Request, response: Response): Promise<Response> {
		const gamesRepository = new GamesRepository();
		const listGamesUseCase = new ListGamesUseCase(gamesRepository);

		const games = await listGamesUseCase.execute();

		return response.json(games);
	}
}
