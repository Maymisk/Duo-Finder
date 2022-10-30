import axios from 'axios';

export const discordApi = axios.create({
	baseURL: 'https://discord.com/api/v10',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
	},
});
