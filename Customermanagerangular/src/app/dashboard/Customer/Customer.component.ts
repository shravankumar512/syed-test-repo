import { CustomerService } from '../Customer.service';
import { ICustomer } from '../iCustomer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Customer',
  templateUrl: './Customer.component.html',
  styleUrls: ['./Customer.component.css']
})
export class CustomerComponent implements OnInit {
Customer: ICustomer[];
  constructor(private Customerservice: CustomerService) {
    this.Customerservice.getCustomer().subscribe(response => {
      this.Customer = response;
   });
  }
  ngOnInit() {}

}
