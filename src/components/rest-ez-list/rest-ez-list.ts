import { Component } from '@angular/core';

@Component({
  selector: 'rest-ez-list',
  templateUrl: 'rest-ez-list.html'
})
export class RestEzListComponent {

  tempUsers: string[] = ["Keving", "Lisa", "Megan", "Nairobi"]

  users: string[] = ["Andrew", "Bridget", "Cass", "Derek", "Eric", "Frank", "George", 
                    "Helen", "IlMona", "Jessica"]

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {

      this.users = this.users.concat(this.tempUsers);
      infiniteScroll.complete();
    }, 500);
  }
  
  constructor() {
  }

}
