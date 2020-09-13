import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import {CommonModule} from "@angular/common";

@NgModule({
  /* set respective calls to components, services, etc here */
  providers: [],
  imports: [
    // other imports ...
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    FieldErrorDisplayComponent
  ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})


export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
