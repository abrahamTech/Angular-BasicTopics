import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  person = {
    name: "",
    age: ""
  };

  processForm () {
    console.log(this.person)
    //Cleaning the form input after sending the info
    this.person.name = "";
    this.person.age = "";

  };

}
