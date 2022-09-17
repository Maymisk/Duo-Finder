import { Game } from '@prisma/client';
import { IGamesRepository } from './IGamesRepository';
import { prismaClient } from '../../../services/prisma';

export class GamesRepository implements IGamesRepository {
	async list(): Promise<Game[]> {
		const games = await prismaClient.game.findMany({
			include: {
				_count: {
					select: {
						ads: true,
					},
				},
			},
		});

		return games;
	}
}
