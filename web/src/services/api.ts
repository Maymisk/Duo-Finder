import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { ITokenObject } from '../contexts/AuthContext';

interface IRequestQueueObject {
	onSuccess(token: string): void;
	onFailure(error: any): void;
}

export const api = axios.create({
	baseURL: 'http://localhost:3000',
});

let isRefreshing = false;
let requestsQueue: IRequestQueueObject[] = [];

function getDiscordApi() {
	const access_token = Cookies.get('duofinder:access_token');
	const refresh_token = Cookies.get('duofinder:refresh_token');

	const discordApi = axios.create({
		baseURL: 'https://discord.com/api',

		headers: {
			authorization: `Bearer ${access_token}`,
		},
	});

	discordApi.interceptors.response.use(
		response => response,
		(error: AxiosError) => {
			if (error.response?.status === 401) {
				if (!refresh_token) {
					return Promise.reject(error);
				}

				const requestConfig = error.config;

				if (!isRefreshing) {
					isRefreshing = true;

					api.post<ITokenObject>('users/refresh', {
						refresh_token,
					})
						.then(response => {
							const { access_token, refresh_token, expires_in } =
								response.data;

							Cookies.set(
								'duofinder:refresh_token',
								refresh_token
							);
							Cookies.set(
								'duofinder:access_token',
								access_token,
								{ expires: expires_in / (60 * 60 * 24) }
							);

							discordApi.defaults.headers[
								'authorization'
							] = `Bearer ${access_token}`;

							requestsQueue.forEach(request =>
								request.onSuccess(access_token)
							);
							requestsQueue = [];
						})
						.catch(err => {
							requestsQueue.forEach(request =>
								request.onFailure(err)
							);

							requestsQueue = [];

							Cookies.remove('duofinder:refresh_token');
							Cookies.remove('duofinder:access_token');
						})
						.finally(() => {
							isRefreshing = false;
						});
				}

				return new Promise((res, rej) => {
					requestsQueue.push({
						onSuccess: (token: string) => {
							requestConfig.headers![
								'authorization'
							] = `Bearer ${token}`;

							res(discordApi(requestConfig));
						},

						onFailure: (err: any) => res(err),
					});
				});
			}
		}
	);

	return discordApi;
}

export const discordApi = getDiscordApi();
