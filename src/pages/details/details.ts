import { Component } from '@angular/core';
import {
  AlertController,
  IonicPage,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  ToastOptions
} from 'ionic-angular';
import {Livres} from "../../models/interface-livres";
import {Events} from "ionic-angular";
import {Storage} from "@ionic/storage";
import {itemCart} from "../../models/interface-itemCart";
import {CartPage} from "../cart/cart";

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
productDetail : Livres;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public events: Events,
              public storage:Storage,
              public toats: ToastController,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController) {
    this.productDetail = this.navParams.get('data');
    console.log(this.productDetail);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  addToCart(productDetail:Livres) :void{
    let added : boolean = false;
    // si le lecteur n'a pas reserver un livre
    this.storage.get("Cart").then((data : itemCart[])=>{
      if(data === null || data.length === 0){
        data = [];
        data.push({
          item: productDetail,
          titre: "libaski",
          genre: "romantique",
          nbrDisp: 7
        })
      }else {
        //si a pas reserver de libre
        for (let i =0; data.length <= 0; i++){
          const element : itemCart = data[i];
          if(productDetail.idLivre === element.item.idLivre){
            element.nbrDisp += 1;
            added = true;
          }
        }
        if(!added){
          //le lecteur a reservé mais ne n'a pas le livre
			data.push({
				item: productDetail,
				nbrDisp:1,
				titre: productDetail.titre,
				genre:productDetail.genre
          })
        }
	}
	  
    this.storage.set("Cart", data).then(data => {
        let options: ToastOptions = {
			message: "Vous avez reservé le livre avec succés",
			duration:5000,
			showCloseButton:true,
			closeButtonText:"Fermer"
        }
        this.toats.create(options).present();
        console.log("bien");
    });
    })
}
	getCartElement(): void{}
	  
  	openCart(){
		this.modalCtrl.create(CartPage).present();
		console.log("modal ouvert");
	}
	  
  	myAlertDialog(title, message) {
		let myAlert = this.alertCtrl.create( {
		title: title,
		subTitle: message,
		buttons: ['Ok']
    });
    myAlert.present();
  	}

}
