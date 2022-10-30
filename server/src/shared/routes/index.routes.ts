import { Router } from 'express';
import { adsRoutes } from './ads.routes';
import { gamesRoutes } from './games.routes';
import { usersRoutes } from './user.routes';

const routes = Router();

routes.use('/games', gamesRoutes);
routes.use('/ads', adsRoutes);
routes.use('/users', usersRoutes);

export { routes };
