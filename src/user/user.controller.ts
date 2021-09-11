/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, Req} from '@nestjs/common';
import { User } from "./user.model";
import { UserService } from "./user.service";

@Controller('/user')
export class UserController {
    constructor(private readonly service: UserService){}

    @Get()
    async findAll(){
        return await this.service.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string){
        return await this.service.findOne(id);
    }

    @Get(':email')
    async findByEmail(@Param('email') email: string){
        return await this.service.findByEmail(email);
    }

    @Post()
    async create(@Body() model:User){
        return await this.service.create(model);
    }

    @Post('/validate')
    async validatePassword(@Body() request: any){
        return await this.service.validatePassword(request.email, request.password);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() model:User){
        return await this.service.update(id, model);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return await this.service.delete(id);
    }

}
