import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { routes } from './shared/routes/index.routes';
import { AppError } from './shared/error/AppError';

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.use(
	(
		error: Error,
		request: Request,
		response: Response,
		next: NextFunction
	) => {
		if (error instanceof AppError) {
			return response
				.status(error.statusCode)
				.json({ message: error.message });
		}

		return response.status(500).json({
			message: `Internal server error: ${error.message}`,
		});
	}
);

export { app };
