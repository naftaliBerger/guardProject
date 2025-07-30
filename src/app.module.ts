import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ShiftsModule } from './shifts/shifts.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
// import { User } from './users/users.module';
import { config } from 'dotenv';
config();
@Module({
  imports: [AuthModule, UsersModule, ShiftsModule, AssignmentsModule
    ,SequelizeModule.forRoot({
      dialect: 'postgres',
      uri: process.env.DATABASE_URL,
      // models: [User],
      autoLoadModels: true,
      synchronize: false, 
      ssl: true,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    }),
  ],
 
  
})
export class AppModule {}


