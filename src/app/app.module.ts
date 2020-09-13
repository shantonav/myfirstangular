import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';

@NgModule({
  /* set respective calls to components, services, etc here */
  providers: [],
  imports: [
    // other imports ...
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FieldErrorDisplayComponent
  ],
  bootstrap: [ AppComponent ]
})


export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
