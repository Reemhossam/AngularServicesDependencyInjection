import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import { userService } from '../../Services/user.service';
import { User } from '../../Models/User';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [UserListComponent,UserDetailComponent,FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';
  constructor(private userService:userService){}
  CreateNewUser(){
    this.userService.CreateUser(this.name, this.gender, this.subType, this.status);
  }
  // Detailuser:User;
  // handleEvent(eventargs: User) {
  //   this.Detailuser = eventargs;
  // }
  

}
