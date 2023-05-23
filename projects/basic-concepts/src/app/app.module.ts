import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { LoopsComponent } from './loops/loops.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ButtonsComponent,
    TemplateVariablesComponent,
    LoopsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
