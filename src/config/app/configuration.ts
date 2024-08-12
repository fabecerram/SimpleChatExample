import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  jwtSecret: process.env.JWT_SECRET,
  openApiKey: process.env.OPENAI_API_KEY,
}));