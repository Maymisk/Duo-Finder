import { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import { api, discordApi } from '../services/api';

interface IAuthContextData {
	signIn(): void;
	signOut(): void;
	isAuthenticated: boolean;
	user: IUser | null;
}

interface IAuthContextProviderProps {
	children: ReactNode;
}

export interface ITokenObject {
	access_token: string;
	refresh_token: string;
	expires_in: number;
}

interface IUser {
	id: string;
	username: string;
	discriminator: string;
	avatar: string;
	banner: string;
}

const AuthContext = createContext({} as IAuthContextData);

export function AuthContextProvider({ children }: IAuthContextProviderProps) {
	const [user, setUser] = useState<IUser | null>(null);

	const isAuthenticated = !!user;

	async function getUser() {
		const accessToken = Cookies.get('duofinder:access_token');

		if (accessToken) {
			const response = await discordApi.get<IUser>('/users/@me');

			setUser(response.data);
		}
	}

	useEffect(() => {
		getUser();
	}, []);

	async function signIn() {
		const search = window.location.search;

		const queryParams = new URLSearchParams(search);

		const code = queryParams.get('code');

		if (code) {
			try {
				const response = await api.post<ITokenObject>(
					'/users/authenticate',
					{
						code,
					}
				);

				const token = response.data;

				discordApi.defaults.headers[
					'authorization'
				] = `Bearer ${token.access_token}`;

				Cookies.set('duofinder:refresh_token', token.refresh_token);

				Cookies.set('duofinder:access_token', token.access_token, {
					expires: token.expires_in / (60 * 60 * 24),
				});

				await getUser();
			} catch (err) {
				if (err instanceof AxiosError) console.log(err.response?.data);
			}
		}
	}

	async function signOut() {
		Cookies.remove('duofinder:access_token');
		Cookies.remove('duofinder:refresh_token');
		setUser(null);
	}

	return (
		<AuthContext.Provider
			value={{
				signIn,
				signOut,
				isAuthenticated,
				user,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}
