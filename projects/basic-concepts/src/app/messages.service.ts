import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  messagesServ: string[] = [];

  add(message: string){
    this.messagesServ.push(message);
  }
}
