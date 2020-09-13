import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  /* set respective calls to components, services, etc here */
  providers: [],
  imports: [
    // other imports ...
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
    ])
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})


export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
