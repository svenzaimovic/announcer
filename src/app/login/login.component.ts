import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User }    from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  user = new User('','','',false)

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
