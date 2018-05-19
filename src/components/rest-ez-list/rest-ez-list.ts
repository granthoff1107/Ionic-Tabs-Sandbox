import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../../pages/profile/profile';

@Component({
  selector: 'rest-ez-list',
  templateUrl: 'rest-ez-list.html'
})
export class RestEzListComponent {

  tempUsers: string[] = ["Keving", "Lisa", "Megan", "Nairobi"]

  users: string[] = ["Andrew", "Bridget", "Barry", "Catherine", "Charles", "Cass", "Derek", "David", "Eric", "Frank", "Felicia" , "George", "Gerry", 
                    "Helen", "IlMona", "Jessica"]

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {

      this.users = this.users.concat(this.tempUsers);
      infiniteScroll.complete();
    }, 500);
  }
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  refresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {

      this.users = [];
      event.complete();
    }, 500);
  }

  navigateToDetail(user: string)
  {
      this.navCtrl.push(ProfilePage, { user });
  }

}
