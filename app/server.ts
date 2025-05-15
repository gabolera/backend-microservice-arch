import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import routes from './infra/presentation/routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
}); 