import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TamplateComponent } from './pages/tamplate/tamplate.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    TamplateComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
