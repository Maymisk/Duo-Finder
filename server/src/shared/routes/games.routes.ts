import { Router } from 'express';
import { ListGamesController } from '../../modules/games/useCases/listGamesUseCase/ListGamesController';

const gamesRoutes = Router();

const listGamesController = new ListGamesController();
gamesRoutes.get('/', listGamesController.handle);

export { gamesRoutes };
