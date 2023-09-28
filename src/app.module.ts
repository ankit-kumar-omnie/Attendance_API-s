import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRootAsync({

    imports: [ConfigModule],

    useFactory: (configService: ConfigService) => ({
      uri: configService.get("MONGO_URI")
    }),

    inject: [ConfigService]

  }),
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: [".local.env"]
  }), EmployeeModule]

})
export class AppModule {}