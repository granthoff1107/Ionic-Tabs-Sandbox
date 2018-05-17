import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestEzListComponent } from '../../components/rest-ez-list/rest-ez-list';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild('restEzList', undefined) restEzList:RestEzListComponent;
  constructor(public navCtrl: NavController) {

  }

  refresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {

      this.restEzList.users = [];
      event.complete();
    }, 500);
}

}
