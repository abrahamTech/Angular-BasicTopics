import { Component } from '@angular/core';
import { MessagesService } from '../messages.service'; 

@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrls: ['./add-messages.component.css']
})
export class AddMessagesComponent {

  //For Inject the Messages service you need the constructor
  constructor(public messageService: MessagesService) {}

  message: string = "";

  // If you initialize like this the variable "message?: string;" you need to write an "!" in "this.message!"
  addMessage(){
    this.messageService.add(this.message);
    this.message = "";
  }
}
