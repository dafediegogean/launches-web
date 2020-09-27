import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { BasicInformationFormComponent } from './basic-information-form/basic-information-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicInformationFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
