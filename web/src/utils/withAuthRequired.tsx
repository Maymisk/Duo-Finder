import { ComponentType, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function withAuthRequired<P extends JSX.IntrinsicAttributes>(
	Component: ComponentType<P>
) {
	return function (props: P) {
		const navigate = useNavigate();
		const { isAuthenticated } = useAuth();

		useEffect(() => {
			if (!isAuthenticated) {
				navigate('/');
			}
		}, []);

		return <Component {...props} />;
	};
}
