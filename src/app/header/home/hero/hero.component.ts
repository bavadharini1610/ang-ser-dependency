import { Component, inject } from '@angular/core';
import { SubscribeService } from 'src/app/services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  // providers:[SubscribeService]
})
export class HeroComponent {

  constructor(private subService:SubscribeService){
  }
  onSubscribe(){
    this.subService.onSubscribeClicked('yearly');
  }

}
