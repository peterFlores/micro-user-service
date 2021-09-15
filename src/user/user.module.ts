/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.model';
import { Menu, MenuSchema } from "./menu.model";

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { name: User.name, schema: UserSchema},
        { name: Menu.name, schema: MenuSchema}
      ]
    )
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
