import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from 'src/app/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  selectedProduct;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /*
    let id = +this.route.snapshot.paramMap.get("id");
    console.log(id)
    this.selectedProduct= products.find(p=> p.id ===id)
    console.log(this.selectedProduct) */

    
    this.route.paramMap
    .subscribe(p=> { 
      let id = +p.get("id")
      this.selectedProduct = products.find(i=> i.id ===id)
    
    })
    
  }
   
}
