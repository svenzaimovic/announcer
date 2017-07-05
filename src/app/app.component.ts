import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private usersService: UsersService) { }

isLoggedIn = false

  ngOnInit() {

    function me(){
      this.usersService.getMe().subscribe(user => {
        console.log('Got me', user);
        this.isLoggedIn = true
        console.log(this.isLoggedIn)
      })
    }  
  }


  title = 'SSST Announcer';
}
