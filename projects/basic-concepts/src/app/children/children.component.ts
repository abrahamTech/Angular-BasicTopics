import { Component, Input, Output, EventEmitter } from '@angular/core';

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

  @Input() dataFromInput: string = "";

  // To create a new Event we need to import "EventEmitter" from @angular/core
  // To transmit our Event we need to import "Output" from @angular/core
  @Output() dataFromInputChange = new EventEmitter<string>();

  emitTitleChange(){
    this.dataFromInputChange.emit(this.dataFromInput);
  }
}
