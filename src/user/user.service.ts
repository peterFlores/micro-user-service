/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User.name) private readonly userModel: Model<User>
    ) {}
    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async findOne(id: string): Promise<User> {
        return await this.userModel.findById(id).exec();
    }

    async findByEmail(email: string): Promise<User>{
        return await this.userModel.findById(email).exec();
    }

    async create(user: User): Promise<User> {
        const hash = await bcrypt.hash(user.password, 10);
        return await new this.userModel({...user, password: hash}).save();
    }

    async validatePassword(email: string, password: string): Promise<Boolean>{
        const filter = { email: email};
        const user: User = await this.userModel.findOne(filter).exec();
        Logger
        return await bcrypt.compareSync(password, user.password);
    }

    async update(id: string, user: User): Promise<User> {
        return await this.userModel.findByIdAndUpdate(id, user).exec();
    }

    async delete(id: string): Promise<User> {
        return await this.userModel.findByIdAndDelete(id).exec();
    }
}
