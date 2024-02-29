import { Component } from '@angular/core';
import { ProductsCatalogue } from '../../interfaces/products.interfaces';
import { productsService } from '../../services/products.service';

@Component({
  selector: 'selector',
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss'
})
export class SelectorComponent {
  isFiltered:boolean=false;
  categories: string[] = ["electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"] //array de categorías de la api
    filteredProducts:ProductsCatalogue[]=[] //array vacio referenciando a la interfaz
    constructor(private productService:productsService) {

    }
    filterProducts(product:string){
      this.productService.filterByCategory(product)
      .subscribe(item=>{
        this.filteredProducts=item; //llenado de el array vacío

        console.log(this.filteredProducts)
        this.isFiltered=true;


      })
    }
}


