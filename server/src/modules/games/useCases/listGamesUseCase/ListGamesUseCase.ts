import { IGamesRepository } from '../../repositories/IGamesRepository';
import { prismaClient } from '../../../../services/prisma';
import { Game } from '@prisma/client';

export class ListGamesUseCase {
	constructor(private gamesRepository: IGamesRepository) {}

	async execute(): Promise<Game[]> {
		const games = await this.gamesRepository.list();

		return games;
	}
}
