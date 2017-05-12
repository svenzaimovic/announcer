import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  getAllUsers() {
    return this.http.get('/api/users')
      .map(res => res.json());
  }

  deleteUserWithId() {
  	return this.http.delete('/api/users/:id')
  		.map(res => res.json());
  }

}
