import { Component } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  //providers:[SubscribeService]
})
export class HeroComponent {
  constructor(private subService:SubscribeService){

  }

  OnSubscribe(){
    this.subService.OnSubscribeClicked('yearly');
    console.log(this.subService.test);
  }

}
