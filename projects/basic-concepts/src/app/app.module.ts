import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { LoopsComponent } from './loops/loops.component';
import { ChildrenComponent } from './children/children.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ButtonsComponent,
    TemplateVariablesComponent,
    LoopsComponent,
    ChildrenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
