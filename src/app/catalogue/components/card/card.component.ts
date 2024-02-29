import { Component, Input} from '@angular/core';
import { ProductsCatalogue } from '../../interfaces/products.interfaces';
import { productsService } from '../../services/products.service';


@Component({
  selector: 'card',
  templateUrl: 'card.component.html',
  styleUrl: 'card.component.scss'
})

export class CardComponent   {
  products:ProductsCatalogue[]=[]
  constructor(private productService:productsService  ) {
    this.getProduct()
   }



  getProduct(){
    this.productService.searchProduct()
    .subscribe((products)=>{
      this.products = products;

    })
  }

}
