import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  // providers:[SubscribeService]
})
export class SidebarComponent {

  constructor( private subService:SubscribeService){
  }

  onSubscribe(){
    this.subService.onSubscribeClicked('quarterly');
  }
}
