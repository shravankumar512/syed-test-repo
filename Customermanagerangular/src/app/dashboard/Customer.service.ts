import { ICustomer } from './iCustomer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }
  getMovies()
  {
    const url = 'http://localhost:3000/Customer/getCustomer';
 return this.http.get<ICustomer[]>(url);
  }
  addCustomer(details)
  {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const url = 'http://localhost:3000/movies/addmovie';
   const movie = JSON.stringify(details);
   const id = details.id;
   const first_name = details.First_Name;
   const last_name = details.Last_Name;
   const address = details.Address;
   const city = details.City;
     return this.http.post<ICustomer[]>(url, {id: id, First_Name: first_name, Last_Name: last_name, Address: address, City: city, State: state});
  }
  getMovie(id)
  {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const url = 'http://localhost:3000/movies/getmovie';
    const s = JSON.stringify(id);
    console.log(s);
   const m = id.id;
     return this.http.post<Imovies[]>(url, {id: id});
  }
  updateMovie(details)
  {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const url = 'http://localhost:3000/movies/updatemovie';
    const s = JSON.stringify(details);
    const id = details.id;
    const name = details.Name;
    const release_date = details.Release_Date;
    const rating = details.Rating;
    const language = details.Language;
      return this.http.put<Imovies[]>(url, {id: id, Name: name, Release_Date: release_date, Rating: rating, Language: language});
  }
}
