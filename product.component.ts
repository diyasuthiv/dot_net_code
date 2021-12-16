import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productName:string=" ";
  price:number=0;
  qty:number=0;
  disc:number=0;
  total:number=0;

  generateBill()
  {
    this.total=(this.price*this.qty)-((this.price*this.qty)*(this.disc/100));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
