import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  getAllUsers() {
    return this.http.get('/api/users')
      .map(res => res.json());
  }

  deleteUserWithId(id) {
  	return this.http.delete('/api/users/' + id)
  		.map(res => res.json());
  }

  createUser(body:Object) {
  	let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  	let options = new RequestOptions({ headers: headers });
  	// let bodyString = JSON.stringify(body); -- Not needed for now, maybe later
  	return this.http.post('/api/account/register', body, headers)
  		.map(res => res.json());
  }

  login(body:Object){
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  	let options = new RequestOptions({ headers: headers });
  	// let bodyString = JSON.stringify(body); -- Not needed for now, maybe later
  	return this.http.post('/api/account/login', body, headers)
  		.map(res => res.json());
  }

  getMe(){
    return this.http.get('/api/users/me')
  		.map(res => res.json());
  }

  logout(){
    return this.http.post('/api/account/logout', {})
  		.map(res => res.json());
  }

}
