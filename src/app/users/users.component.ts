import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

	users: any = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  	this.usersService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  public deleteUserOnClick = (user:any) => { 
	  this.usersService.deleteUserWithId(user._id).subscribe(users => {
      this.users = users;
    });
	}



}
