import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food, CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class ShopingService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>(this.cartItems);
  public cart$: Observable<CartItem[]> = this.cartSubject.asObservable();





  constructor() {
    this.loadFromStorage();
  }



  private loadFromStorage():void{
    const stored = localStorage.getItem('shopping_cart')
    if (stored) {
      try {
        this.cartItems = JSON.parse(stored);
        this.cartSubject.next([...this.cartItems]);
      } catch (e) {
        console.error('خطا در بارگذاری سبد خرید', e);
        this.cartItems = [];
        this.cartSubject.next([]);
      }
    }
  }
}

