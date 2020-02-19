import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppGridComponent } from './components/app-grid/app-grid.component';
import {GridModule, SharedModule} from '@progress/kendo-angular-grid';

import { StoreModule } from '@ngrx/store';
import { CustomerReducer } from './reducers/customer.reducers';

@NgModule({
  declarations: [
    AppComponent,
    AppGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GridModule,
    SharedModule,
    StoreModule.forRoot({customers: CustomerReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
