/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-types */
import { Injectable, Logger, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, SchemaTypeOptions } from 'mongoose';
import { User } from './user.model';
import { Menu } from "./menu.model";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User.name) private readonly userModel: Model<User>,
        @InjectModel(Menu.name) private readonly menuModel: Model<Menu>
    ) {}    

    async findAll(): Promise<User[]> {
        const users = await this.userModel.find().exec();
        const newMenu = await this.menuModel.find().exec();
        users.forEach( async userall => {
            const userMenu = Object.values(await (await this.userModel.findById(userall['_id'])).menu);
            userMenu.forEach(  register => { newMenu.forEach(menus => {
                if(register['_id'] == menus.get('_id')){if(register['status'] != menus.get('status')){
                        if(menus.get('status')==true){register['status'] == true;
                            this.userModel.findByIdAndUpdate({ '_id': userall['_id'], 'menu._id': register['_id']},{$set: {'menu.$.status': true}}).exec(); 
                        }else{register['status'] == false;
                            this.userModel.findByIdAndUpdate({ '_id': userall['_id'], 'menu._id': register['_id']},{$set: {'menu.$.status': false}}).exec();}}}});});
        });
        return await this.userModel.find().exec();
    }

    async findOne(id: string): Promise<User> {
        const newMenu = await this.menuModel.find().exec();
        const userMenu = Object.values(await (await this.userModel.findById(id)).menu);
        userMenu.forEach(  register => { newMenu.forEach(menus => {
                if(register['_id'] == menus.get('_id')){if(register['status'] != menus.get('status')){
                        if(menus.get('status')==true){register['status'] == true;
                            this.userModel.findByIdAndUpdate({ '_id': id, 'menu._id': register['_id']},{$set: {'menu.$.status': true}}).exec(); 
                        }else{register['status'] == false;
                            this.userModel.findByIdAndUpdate({ '_id': id, 'menu._id': register['_id']},{$set: {'menu.$.status': false}}).exec();}}}});});
        return await this.userModel.findById(id).exec();
    }

    async findByEmail(email: string): Promise<User>{
        const filter = { email: email };
        return await this.userModel.findOne({filter}).exec();
    }

    async create(user: User): Promise<User>{
        const hash = await bcrypt.hash(user.password, 10);
        return await new this.userModel({...user, password: hash}).save();
    }

    async validatePassword(email: string, password: string): Promise<Boolean>{
        const filter = { email: email};
        const user: User = await this.userModel.findOne(filter).exec();
        Logger
        return await bcrypt.compareSync(password, user.password)
    }

    async update(id: string, user: User): Promise<User>{
        return await this.userModel.findByIdAndUpdate(id, user).exec();
    }

    async delete(id: string): Promise<User> {
        return await this.userModel.findByIdAndDelete(id).exec();
    }
}
