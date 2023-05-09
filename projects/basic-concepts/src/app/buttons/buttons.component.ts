import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  text_color:string = "";
  button_dis:boolean = false;

  buttons_disabled () {
    this.button_dis = !this.button_dis;
    this.text_color = "";
  }

  img_page: string = "https://images.pexels.com/photos/767172/pexels-photo-767172.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";

  changeToOriginal() {
    this.img_page = "https://images.pexels.com/photos/767172/pexels-photo-767172.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
  }
}
