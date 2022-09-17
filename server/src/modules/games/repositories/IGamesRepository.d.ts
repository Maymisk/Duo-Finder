import { Game } from '@prisma/client';

export interface IGamesRepository {
	list(): Promise<Game[]>;
}
