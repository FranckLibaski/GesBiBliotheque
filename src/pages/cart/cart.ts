import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { Storage} from "@ionic/storage";
import {itemCart} from "../../models/interface-itemCart";

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  cartItem : itemCart[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
    this.storage.get("Cart").then((data : itemCart[])=>{
      this.cartItem = data;
    }).catch(err => {
      console.log(err);
    })
  }
  closeModal(): void{
    this.viewCtrl.dismiss()
  }

}
