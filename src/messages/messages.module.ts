import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessageServices } from './messageService';
import { MessageRepository } from './messageRepository';
@Module({
  controllers: [MessagesController],
  providers:[MessageServices,MessageRepository]
})
export class MessagesModule {}
