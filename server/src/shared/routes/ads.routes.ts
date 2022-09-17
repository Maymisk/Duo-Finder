import { Router } from 'express';
import { CreateAdController } from '../../modules/ads/useCases/createAdUseCase/CreateAdController';
import { GetDiscordByAdIdController } from '../../modules/ads/useCases/getDiscordByAdId/GetDiscordByAdIdController';
import { ListAdsByGameController } from '../../modules/ads/useCases/listAdsByGame/ListAdsByGameController';

const adsRoutes = Router();

const createAdController = new CreateAdController();
adsRoutes.post('/game/:id', createAdController.handle);

const listAdsByGameController = new ListAdsByGameController();
adsRoutes.get('/game/:id', listAdsByGameController.handle);

const getDiscordByAdIdController = new GetDiscordByAdIdController();
adsRoutes.get('/:id/discord', getDiscordByAdIdController.handle);

export { adsRoutes };
