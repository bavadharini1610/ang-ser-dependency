import { Component } from '@angular/core';
import { SubscribeService } from './services/subscribe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers:[SubscribeService]
})
export class AppComponent {
  title = 'angular-services-dependency-injection';
}
