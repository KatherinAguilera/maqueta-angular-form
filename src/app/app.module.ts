import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { ThanksNotificationComponent } from './components/thanks-notification/thanks-notification.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
declarations: [
   AppComponent,
   HeaderComponent,
   FormComponent,
   ThanksNotificationComponent,
   SliderComponent,
   FooterComponent
],
imports: [
   BrowserModule,
   ReactiveFormsModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
