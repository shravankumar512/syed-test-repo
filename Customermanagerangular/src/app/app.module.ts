import { ReadCustomerComponent } from './dashboard/read-Customer/read-Customer.component';
import { CustomerdetailsComponent } from './dashboard/Customerdetails/Customerdetails.component';
import { AddCustomerComponent } from './dashboard/add-Customer/add-Customer.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, DashboardModule, HttpClientModule, FormsModule,
    RouterModule.forRoot([
      {path: 'Customer', component: CustomerComponent},
      {path: 'addCustomer', component: AddCustomerComponent},
      {path: 'Customermovie', component: ReadCustomerComponent},
      {path: 'updatCustomer/:id', component: CustomerdetailsComponent},
      {path: '', component: CustomerComponent},
      {path : '**', redirectTo: '/', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
