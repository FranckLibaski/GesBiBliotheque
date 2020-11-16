import { Component } from '@angular/core';
import {NavController, AlertController, AlertOptions, ActionSheetController, ActionSheetOptions} from 'ionic-angular';
import { DetailsPage} from "../details/details";
import {s} from "@angular/core/src/render3";
import {Livres} from "../../models/interface-livres";
import {MenuPage} from "../menu/menu";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Articles : Livres[];

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public actionCtrl: ActionSheetController) {
    // @ts-ignore
    this.Articles = [
      {
        titre: 'Balafon',
        auteur: 'Engelbert MVENG',
        genre : 'Avanture',
        nbrDePage: 212,
        dateEdition: new Date(),
        nbrDisp: 5,
        status:  10,
        etat:'vieux',
        image: [
          'assets/imgs/avanture/blanche.jpg',
          'assets/imgs/avanture/balafon.jpg',
          'assets/imgs/avanture/manglouloune.jpg',
          'assets/imgs/avanture/blanche.jpg',
        ],
        availability: {
          available: true,
          type: 'livraison',
          feed: 10,
        }
      },
      {
        titre: 'Le Droit',
        auteur: 'Maurice KAMTO',
        genre : 'Education',
        nbrDePage: 248,
        dateEdition: new Date(),
        nbrDisp: 5,
        status:1,
        etat:'neuf',
        image: [
          'assets/imgs/education/conteSud.jpg',
          'assets/imgs/education/droit.jpg',
          'assets/imgs/education/conteSud.jpg',
          'assets/imgs/education/droit.jpg',
        ],
        availability: {
          available: true,
          type: 'livraison',
          feed: 10,
        }
      },
      {
        titre: 'Bimanes',
        auteur: 'Severin Cecile ABEGA',
        genre : 'Fantastique',
        nbrDePage: 82,
        dateEdition: new Date(),
        nbrDisp: 5,
        status:7,
        etat:'neuf',
        image: [
          'assets/imgs/fantastique/alcool.jpg',
          'assets/imgs/fantastique/Bimanes.jpg',
          'assets/imgs/fantastique/alcool.jpg',
          'assets/imgs/fantastique/Bimanes.jpg',
        ],
        availability: {
          available: true,
          type: 'livraison',
          feed: 10,
        }
      },
      {
        titre: 'Securité informatique',
        auteur: 'Franck NFANKOU',
        genre : 'Informatique',
        nbrDePage: 312,
        dateEdition: new Date(),
        nbrDisp: 5,
        status:2,
        etat:'neuf',
        image: [
          'assets/imgs/informatique/c.jpg',
          'assets/imgs/informatique/cloud.jpg',
          'assets/imgs/informatique/python.jpg',
          'assets/imgs/informatique/security.jpg',
        ],
        availability: {
          available: true,
          type: 'livraison',
          feed: 10,
        }
      },
      {
        titre: 'Madame bovary',
        auteur: 'Gustave Flaubert',
        genre : 'romantique',
        nbrDePage: 310,
        dateEdition: new Date(),
        nbrDisp: 5,
        status:2,
        etat:'neuf',
        image: [
          'assets/imgs/romantique/cendre.jpg',
          'assets/imgs/romantique/bovary.jpg',
          'assets/imgs/romantique/pretendant.jpg',
        ],
        availability: {
          available: true,
          type: 'livraison',
          feed: 10,
        }
      },
      {
        titre: 'Une saison blanche et seche',
        auteur: 'Andre BREN',
        genre : 'Poeme',
        nbrDePage: 112,
        dateEdition: new Date(),
        nbrDisp: 5,
        status:2,
        etat:'neuf',
        image: [
          'assets/imgs/avanture/balafon.jpg',
          'assets/imgs/avanture/blanche.jpg',
          'assets/imgs/fantastique/alcool.gif',
          'assets/imgs/informatique/java.jpg',
        ],
        availability: {
          available: true,
          type: 'livraison',
          feed: 10,
        }
      }
    ]
  }
  showDetail(article : Livres):void {
    this.navCtrl.push(DetailsPage,{data : article});
  }
  menuShow(){
    this.navCtrl.push(MenuPage);
  }
}

