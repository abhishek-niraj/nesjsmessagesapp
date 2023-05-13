import {Injectable} from '@nestjs/common';
import { MessageRepository } from "./messageRepository";
@Injectable()
export class MessageServices{
 
    constructor(public messageRepo: MessageRepository){
    }
     findOne(id:string){
        return this.messageRepo.findOne(id)
    }
    findAll(){
        return this.messageRepo.findAll();
    }
    create(content:string){
        return this.messageRepo.create(content);
    }
}