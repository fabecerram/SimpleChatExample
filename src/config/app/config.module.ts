import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration';
import { AppConfigService } from './config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      load: [configuration],
      validationSchema: Joi.object({
        APP_NAME: Joi.string(),
        APP_ENV: Joi.string(),
      }),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
