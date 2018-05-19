import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestEzListComponent } from '../../components/rest-ez-list/rest-ez-list';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

}
