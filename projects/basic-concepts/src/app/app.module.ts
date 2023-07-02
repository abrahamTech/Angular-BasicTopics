import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { LoopsComponent } from './loops/loops.component';
import { ChildrenComponent } from './children/children.component';

import { FormsModule } from '@angular/forms';
import { AddMessagesComponent } from './add-messages/add-messages.component';
import { ListMessagesComponent } from './list-messages/list-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ButtonsComponent,
    TemplateVariablesComponent,
    LoopsComponent,
    ChildrenComponent,
    AddMessagesComponent,
    ListMessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
