import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User }    from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  
  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  user = new User('','','')

  public createUserOnClick = (user:any) => { 
		this.usersService.createUser(user).subscribe(user => {
		  this.user = user;
    });
  }

  public login(user:any){
    console.log('Called login');
    this.usersService.login({
      email: user.email,
      password: user.password
    }).subscribe(user => {
		  console.log('Succefull login', user);
    });
  }

  public me(){
    this.usersService.getMe().subscribe(user => {
      console.log('Got me', user);
    })
  }

  public logout(){
    this.usersService.logout().subscribe(nesto => {
      console.log('Logout', nesto);
    })
  }

}


