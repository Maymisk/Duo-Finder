import axios, { AxiosError } from 'axios';
import { discordApi } from '../../../../services/discordApi';
import { AppError } from '../../../../shared/error/AppError';

export class RefreshTokenUseCase {
	async execute(refresh_token: string) {
		if (!refresh_token) {
			throw new AppError('Refresh token not found.');
		}

		try {
			const payload = new URLSearchParams();

			payload.append('client_id', process.env.DISCORD_CLIENT_ID!);
			payload.append('client_secret', process.env.DISCORD_CLIENT_SECRET!);
			payload.append('grant_type', 'refresh_token');
			payload.append('refresh_token', refresh_token);

			const response = await discordApi.post('oauth2/token', payload);

			return response.data;
		} catch (error) {
			console.log(error, 'ERRO NO REFRESH');
			if (error instanceof Error) {
				throw new AppError(error.message);
			}
		}
	}
}
