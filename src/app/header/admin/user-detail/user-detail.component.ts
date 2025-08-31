import { Component, Inject, inject, OnInit } from '@angular/core';
import { USER_TOKEN } from 'src/app/app.module';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  selectedUser:User;
  // constructor(@Inject(USER_TOKEN)private userService:UserService){}
  userService = inject(USER_TOKEN);

  ngOnInit(){
    this.userService.OnUserDetailsClicked.subscribe((data:User)=>{
      this.selectedUser = data;
    });
  }

}
