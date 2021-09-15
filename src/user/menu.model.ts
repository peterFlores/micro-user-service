/* eslint-disable prettier/prettier */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MenuDocument = Menu & Document;
@Schema()
export class Menu {
   _id: string;
   name: string;
   description: string;
   path: string;
   image: string;
   status: boolean;
}

export const MenuSchema = SchemaFactory.createForClass(Menu);

/*var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MenuSchema = new Schema({
    name: { type: String},
    descrption: { type: String},
    path: { type: String},
    image: { type: String},
 });

 exports = mongoose.Model("Menu", MenuSchema);*/