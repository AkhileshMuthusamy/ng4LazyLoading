import { Component, OnInit } from '@angular/core';
/**
 * This is the decription of whole file
 */
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  /**
   * Unneccessay constructor
   */
  constructor() {}
  /** Got added during boilerplate code */
  ngOnInit() {}

  /**
   * Add product to cart
   * @param id Product Id
   * @param product Proudct Name
   */
  addItemToCart(id: number, product: string) {
    console.log('Item added');
  }
}
