import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { User } from '../../../Models/User';
import { userService } from '../../../Services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  constructor(private userService:userService){}
  allUser:User[];
  ngOnInit(): void {
    this.allUser = this.userService.GetAllUser();
  }
  //@Output() myEvent=new EventEmitter<User>();
  onButtonClick(user:User){
    //this.myEvent.emit(user);
    this.userService.onMyEventEmit(user);
  }
}
