import {
	IAdsRepository,
	ICreateAdData,
	ListByGameReturnType,
} from './IAdsRepository';
import { prismaClient } from '../../../services/prisma';
import { Ad } from '@prisma/client';
import { convertHourStringToMinutesInteger } from '../../../utils/converHourStringToMinutesInteger';
import { convertMinutesIntegerToHourString } from '../../../utils/convertMinutesIntegerToHourString';

export class AdsRepository implements IAdsRepository {
	async create({
		hourStart,
		hourEnd,
		weekDays,
		...rest
	}: ICreateAdData): Promise<Ad> {
		const ad = await prismaClient.ad.create({
			data: {
				...rest,
				hourStart: convertHourStringToMinutesInteger(hourStart),
				hourEnd: convertHourStringToMinutesInteger(hourEnd),
				weekDays: weekDays.join(','),
			},
		});

		return ad;
	}

	async listByGame(game_id: string): Promise<ListByGameReturnType[]> {
		const ads = await prismaClient.ad.findMany({
			select: {
				id: true,
				name: true,
				hourStart: true,
				hourEnd: true,
				weekDays: true,
				useVoiceChannel: true,
				yearsPlaying: true,
				game_id: true,
				createdAt: true,
			},
			where: {
				game_id,
			},
		});

		return ads.map(ad => {
			return {
				...ad,
				hourStart: convertMinutesIntegerToHourString(ad.hourStart),
				hourEnd: convertMinutesIntegerToHourString(ad.hourEnd),
				weekDays: ad.weekDays.split(',').map(Number),
			};
		});
	}

	async getDiscordById(adId: string): Promise<{ discord: string } | null> {
		const discord = await prismaClient.ad.findUnique({
			where: {
				id: adId,
			},
			select: {
				discord: true,
			},
		});

		return discord;
	}
}
