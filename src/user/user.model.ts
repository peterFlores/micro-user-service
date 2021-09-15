/* eslint-disable prettier/prettier */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Menu, MenuSchema } from './menu.model';
import * as mongoose from 'mongoose';

export type UserDocument = User & Document;
@Schema()
export class User {
   
    @Prop({ required: true})
    first_name: string;

    @Prop()
    second_name: string;
    
    @Prop({ required: true})
    last_name: string;
    
    @Prop()
    slast_name: string;
    
    @Prop({ required: true})
    phone: string;

    @Prop({ required: true, index: true, lowercase: true, unique: true})
    email: string;

    @Prop({ required: true, index: true, maxlength: 13})
    dpi: string;

    @Prop()
    address: string;

    @Prop({ required: true})
    profile_type: string;

    @Prop()
    menu: typeof MenuSchema[];

    @Prop({ required: true})
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

/*var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Menu = mongoose.Model('Menu')

export const UserSchema = new Schema({
    first_name: { type: String, required: true},
    second_name: { type: String},
    last_name: { type: String, required: true},
    slast_name: { type: String},
    phone: { type: String, required: true},
    email: { type: String, required: true, index: true, lowercase: true, unique: true},
    dpi: { type: String, required: true, index: true, maxlength: 13, unique: true},
    address: { type: String},
    profile_type: { type: String, required: true},
    menu: { type: Schema.ObjectId, ref: Menu},
    password: { type: String, required: true},
 });

 exports = mongoose.Model("User", UserSchema);*/
