import { Customerservice } from '../Customer.service';
import { Customer } from '../Customer';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-Customer',
  templateUrl: './add-Customer.component.html',
  styleUrls: ['./add-Customer.component.css']
})
export class AddMovieComponent implements OnInit {
movie: Movie = new Movie();
  constructor(private movieservice: MovieService, private router: Router) { }

  ngOnInit() {
  }
  show(moviedet: NgForm)
  {
    this.movieservice.addMovie(moviedet).subscribe(response => {
      //console.log(response);
      this.router.navigate(['/']);
    });
  }
}
