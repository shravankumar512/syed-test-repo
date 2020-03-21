import { ICustomer } from '../iCustomer';
import { CustomerService } from '../Customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-read-Customer',
  templateUrl: './read-Customer.component.html',
  styleUrls: ['./read-Customer.component.css']
})
export class ReadCustomerComponent implements OnInit {
Customer: Customer = new Customer();
Customer: ICustomer[];
  constructor(private Customerservice: CustomerService) { }

  ngOnInit() {
  }
  show(Customerdet: NgForm)
  {
    //console.log(Customerdet);
    this.Customerservice.getCustomer(Customerdet).subscribe(response => {
      this.Customer = response;
    });
  }
}
