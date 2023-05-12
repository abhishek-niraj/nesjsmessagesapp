import { Controller,Get,Post,Body,Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dtos';
@Controller('messages')
export class MessagesController {
    @Get()
    listMessages(){

    }
    @Post()
    createMessages(@Body() body: CreateMessageDto){
        console.log(body);
    }
    @Get('/:id')
    getMessage(@Param() id: string){
        console.log(id);
    }
}
