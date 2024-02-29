import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProductsCatalogue } from '../interfaces/products.interfaces';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class productsService {
  constructor(private httpClient: HttpClient) { }

  private apiUrl= "https://fakestoreapi.com/products";

  searchProduct():Observable<ProductsCatalogue[]>{
    return this.httpClient.get<ProductsCatalogue[]>(this.apiUrl);


  }
  filterByCategory(new_product:string):Observable<ProductsCatalogue[]>
    {
    return this.httpClient.get<ProductsCatalogue[]>(`${this.apiUrl}/category/${new_product}`)
  }




}
