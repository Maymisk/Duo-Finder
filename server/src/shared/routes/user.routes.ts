import { Router } from 'express';
import { AuthenticateUserController } from '../../modules/user/useCases/authenticateUserUseCase/AuthenticateUserController';
import { RefreshTokenController } from '../../modules/user/useCases/refreshToken/RefreshTokenController';

const usersRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
usersRoutes.post('/authenticate', authenticateUserController.handle);

const refreshTokenController = new RefreshTokenController();
usersRoutes.post('/refresh', refreshTokenController.handle);

export { usersRoutes };
