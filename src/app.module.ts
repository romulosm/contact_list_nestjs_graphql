import { Module } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { ConfigModule } from './config/config.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.envConfig.mongodbUri,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    ContactModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
