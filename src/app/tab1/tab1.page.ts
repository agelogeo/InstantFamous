import { Component } from '@angular/core';
import {NavController, PopoverController} from '@ionic/angular';
import {AccountComponent} from '../popover/account/account.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
      public popoverController: PopoverController,
      public navCtrl: NavController) {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: AccountComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  goToStore() {
    this.navCtrl.navigateForward('tabs/tab4');
  }


}
