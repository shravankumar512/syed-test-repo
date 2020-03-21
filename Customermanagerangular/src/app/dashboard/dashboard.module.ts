
import { CustomerService } from './Customer.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './Customer/Customer.component';
import { AddCustomerComponent } from './add-Customer/add-Customer.component';
import { CustomerdetailsComponent } from './Customerdetails/Customerdetails.component';
import { ReadCustomerComponent } from './read-Customer/read-Customer.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule, FormsModule , RouterModule
  ],
  declarations: [CustomerComponent, AddCustomerComponent, CustomerdetailsComponent, ReadCustomerComponent],
  exports: [CustomerComponent, CustomerdetailsComponent, AddCustomerComponent],
  providers: [ CustomerService ]
})
export class DashboardModule { }
