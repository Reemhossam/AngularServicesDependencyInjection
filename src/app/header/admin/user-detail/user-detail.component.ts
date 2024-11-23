import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../../Models/User';
import { userService } from '../../../Services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {
  // constructor(private userService:userService){}
   userService = inject(userService);
  // allUser:User[];
  // ngOnInit(): void {
  //   this.allUser = this.userService.GetAllUser();
  // }
user:User;
ngOnInit(): void {
  this.userService.myEvent.subscribe((data:User)=>{
    this.user=data;
  })
}

}
