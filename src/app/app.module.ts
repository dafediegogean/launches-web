import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicInformationModule } from './basic-information/basic-information.module';
import { HomeModule } from './home/home.module';
import { LaunchesFormModule } from './launches-form/launches-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    AppRoutingModule,
    HomeModule,
    BasicInformationModule,
    LaunchesFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
