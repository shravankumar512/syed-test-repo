import { ICustomer } from '../iCustomer';
import { CustomerService } from '../Customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../Customer';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-Customerdetails',
  templateUrl: './Customerdetails.component.html',
  styleUrls: ['./Customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
  id: number;
  sub: any;
  Customer: ICustomer[];
  movie: Customer = new Customer();
  constructor(private route: ActivatedRoute, private Customerservice: CustomerService, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      //console.log(this.id);
      const id = Number(this.id);
      this.Customerservice.getCustomer({id: id}).subscribe(response => {
        this.Customer = response;
        //console.log(response);
      });
});
  }
  show(Customerdet: NgForm)
  {
    //console.log(Customerdet);
    const id = this.id;
    const id1 = Number(id);
    Customerdet['id'] = id1;
    console.log(Customerdet);
    this.Customerservice.updateCustomer(Customerdet).subscribe(response => {
      this.Customer = response;
      this.router.navigate(['/']);
    });
  }
}
