import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent {

  // First you need to import "Input" from @angular/core
  @Input() dataFromHtml?: String;
  
  @Input() dataFromTypescript?: String;
  @Input() dataFromTypescript2?: String;

  @Input() dataFromInput: String = "";

}
