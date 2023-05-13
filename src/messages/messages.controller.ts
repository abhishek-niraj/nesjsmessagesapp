import { Controller,Get,Post,Body,Param ,NotFoundException} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dtos';
import { MessageServices } from './messageService';
@Controller('messages')
export class MessagesController {
   
    constructor(public messageService:MessageServices){
    }
    @Get()
    listMessages(){
      return this.messageService.findAll();
    }
    @Post()
    createMessages(@Body() body: CreateMessageDto){
       return this.messageService.create(body.content);
    }
    @Get('/:id')
    async getMessage(@Param('id') id: string){
   const message =  await this.messageService.findOne(id);
   if(!message){
    throw new NotFoundException("message not found");
   }
   return message;
    }
}
