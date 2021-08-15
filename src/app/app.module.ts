import  { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule} from "@angular/forms";
import { ChangeColorDirective } from './reactive-form/change-color.directive';
import {FormsModule} from "@angular/forms";
import { ReactiveForm2Component } from './reactive-form/reactive-form2/reactive-form2.component';
import {HttpClientModule} from "@angular/common/http";
import { ChildrenComponent } from './lifecyclehooks/children/children.component';
import { PromiseobservableComponent } from './promiseobservable/promiseobservable.component';
import { PromObsCountryDataComponent } from './prom-obs-country-data/prom-obs-country-data.component';
import { ObservableComponent } from './observable/observable.component';
import { MultiCastingComponent } from './multi-casting/multi-casting.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    ChangeColorDirective,
    ReactiveForm2Component,
    ChildrenComponent,
    PromiseobservableComponent,
    PromObsCountryDataComponent,
    ObservableComponent,
    MultiCastingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
