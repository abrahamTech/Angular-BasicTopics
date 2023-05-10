import { Component } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.css']
})
export class TemplateVariablesComponent {

  showInConsole(name:string) {

    if(name){
      console.log(name)
    }
  }
  
}
