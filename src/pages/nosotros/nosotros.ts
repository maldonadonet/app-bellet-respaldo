import { Component } from '@angular/core';
import { NavController, NavParams,MenuController } from 'ionic-angular';
import { ClientesProvider } from '../../providers/clientes/clientes'

@Component({
  selector: 'page-nosotros',
  templateUrl: 'nosotros.html',
})
export class NosotrosPage {
  lat: number = 19.4339049;
  lng: number = -98.95820040000001;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _cs: ClientesProvider,
              private menuCtrl:MenuController) {
    this._cs.por_vendedor();
  }

  ionViewWillEnter() {
    this._cs.por_vendedor();
  }

  
  
  

  mostratMenu(){
    this.menuCtrl.toggle();
  }

}
