import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,HomeComponent,AdminComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers:[SubscribeService]
})
export class HeaderComponent {
  constructor(private subService:SubscribeService){

  }
  selectedTab: string = 'home';
  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }

  OnSubscribe(){
    this.subService.OnSubscribeClicked('monthly');
    this.subService.test='header';
  }
}
