import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  
  //By adding !, you are telling the compiler that you trust the myForm property to be initialized elsewhere
  @ViewChild('formContact') myForm!: NgForm;

  person = {
    name: "",
    age: ""
  };


  processForm () {
    console.log(this.person)
    //Cleaning the form input after sending the info
    this.person.name = "";
    this.person.age = "";

    // Resets all the properties from the form, including inputs
    this.myForm.reset();

  };

}
