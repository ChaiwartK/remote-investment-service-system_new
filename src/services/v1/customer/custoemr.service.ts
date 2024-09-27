import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseApi } from '../../base-api';
import { Customer } from '../../model/customer/customer';
@Injectable({
  providedIn: 'root'
})
export class SubscriptionSearchingService {

  constructor(private http: HttpClient) { }

  getCustomer(): Observable<Customer> {
    const localUrl = `${baseApi.customer}/profile`;
    return this.http.get<Customer>(localUrl);
  }



}
