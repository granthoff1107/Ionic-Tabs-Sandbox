import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PageBaseComponent } from '../../components/page-base/page-base';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  @ViewChild('pageBase') set pageBaseComponent(pageBaseComponent: PageBaseComponent)
  {
    var message = "profile page for " + this.user;
    pageBaseComponent.restEzList.users = [message]
  }

  user: string = 'Dummy'
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.user = navParams.get('user');

  }
}
