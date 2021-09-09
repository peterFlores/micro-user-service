/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Menu } from './menu.model';

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
    menu: Menu[];

    @Prop({ required: true})
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
