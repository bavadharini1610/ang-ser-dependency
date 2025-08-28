import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  providers:[SubscribeService]
})
export class SidebarComponent {

  subService: SubscribeService;

  constructor(subService:SubscribeService){
    this.subService=subService;
  }

  onSubscribe(){
    this.subService.onSubscribeClicked('quarterly');
  }
}
