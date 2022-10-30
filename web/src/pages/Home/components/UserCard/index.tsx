import { useAuth } from '../../../../contexts/AuthContext';
import { UserCardContainer, UserInfoContainer } from './styles';

export function UserCard() {
	const { user } = useAuth();

	const avatarUrl = `${import.meta.env.VITE_DISCORD_CDN_BASE_URL}/avatars/${
		user.id
	}/${user.avatar}.png`;

	return (
		<UserCardContainer>
			<UserInfoContainer>
				<h3>{user.username + '#' + user.discriminator}</h3>

				<img
					src={avatarUrl}
					alt={`${user.username}'s profile picture`}
				/>
			</UserInfoContainer>
		</UserCardContainer>
	);
}
