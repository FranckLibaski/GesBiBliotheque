import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  genres: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.genres = [
      {titre:'Securité informatique',description:'le logiciel livre est logiciel dont....',photo:'assets/imgs/informatique/cloud.jpg'},
      {titre:'Madame Bovary',description:'Oeuvre de guistave Flaubert de Moeurs de province',photo:'assets/imgs/romantique/bovary.jpg'},
      {titre:'Alcool',description:'un livre a la fois emancier et nouvelliste',photo:'assets/imgs/fantastique/alcool.jpg'}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
