import axios, { AxiosError } from 'axios';
import { discordApi } from '../../../../services/discordApi';
import { AppError } from '../../../../shared/error/AppError';

export class AuthenticateUserUseCase {
	async execute(code: string) {
		if (!code) {
			throw new AppError('Code not found.');
		}

		try {
			const payload = new URLSearchParams();

			payload.append('client_id', process.env.DISCORD_CLIENT_ID!);
			payload.append('client_secret', process.env.DISCORD_CLIENT_SECRET!);
			payload.append('grant_type', 'authorization_code');
			payload.append('code', code);
			payload.append('redirect_uri', 'http://localhost:5173');

			const response = await discordApi.post('oauth2/token', payload);

			return response.data;
		} catch (error) {
			console.log(error, 'ERRO NA AUTENTICACAO');
			if (error instanceof AxiosError) {
				throw new AppError(error.response?.data.error, 500);
			}
		}
	}
}
