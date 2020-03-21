import { TestBed, inject , async} from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from './Customer.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
describe('CustomerService', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule,
        ],
        providers: [CustomerService, HttpClient]
      });
  });

  it('should be created', inject([CustomerService], (service: CustomerService) => {
    expect(service).toBeTruthy();
  }));
  it('should return json array', async(inject([CustomerService], (service: CustomerService) => {
    service.getCustomer().subscribe(result => {
      expect(result[0].id).toEqual(1);
     });
  })));
  it('should return json array', async(inject([CustomerService], (service: CustomerService) => {
    service.getCustomer({id: 1}).subscribe(result => {
      expect(result[0].id).toEqual(1);
     });
  })));
});
