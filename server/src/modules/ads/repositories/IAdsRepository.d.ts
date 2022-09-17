import { Ad } from '@prisma/client';

type AdWithoutDiscord = Omit<Ad, 'discord'>;

export interface ListByGameReturnType extends AdWithoutDiscord {
	hourStart: string;
	hourEnd: string;
	weekDays: number[];
}

export interface ICreateAdData {
	name: string;
	yearsPlaying: number;
	discord: string;
	weekDays: number[];
	hourStart: string;
	hourEnd: string;
	useVoiceChannel: boolean;
	game_id: string;
}

export interface IAdsRepository {
	create(data: ICreateAdData): Promise<Ad>;
	listByGame(game_id: string): Promise<ListByGameReturnType[]>;
	getDiscordById(adId: string): Promise<{ discord: string } | null>;
}
