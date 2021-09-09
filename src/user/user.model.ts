import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Menu } from './menu.model';

export type UserDocument = User & Document;
@Schema()
export class User {
   
    @Prop()
    first_name: string;

    @Prop()
    second_name: string;
    
    @Prop()
    last_name: string;
    
    @Prop()
    slast_name: string;
    
    @Prop()
    phone: string;

    @Prop()
    dpi: string;

    @Prop()
    address: string;

    @Prop()
    profile_type: string;

    @Prop()
    menu: Menu[];
}

export const UserSchema = SchemaFactory.createForClass(User);
