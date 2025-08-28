import { Component } from '@angular/core';
import { SubscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers:[SubscribeService]
})
export class HeaderComponent {
  selectedTab: string = 'home';

  subService: SubscribeService;

  constructor(subService:SubscribeService){
    this.subService=subService;
  }

  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }
  onSubscribe(){
    this.subService.onSubscribeClicked('monthly');
  }
}
