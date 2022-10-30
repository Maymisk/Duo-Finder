import { Request, Response } from 'express';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

export class AuthenticateUserController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { code } = request.body;

		const authenticateUserUseCase = new AuthenticateUserUseCase();

		const token = await authenticateUserUseCase.execute(code);

		return response.json(token);
	}
}
