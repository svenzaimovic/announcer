import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AnnouncementService {

  constructor(private http: Http) { }

  getAllAnnouncements() {
    return this.http.get('/api/announcements')
      .map(res => res.json());
  }

  deleteAnnouncementWithId(id) {
  	return this.http.delete('/api/announcements/' + id)
  		.map(res => res.json());
  }

  getAnnouncementWithId(id) {
    return this.http.get('/api/announcements/' + id)
  	  .map(res => res.json());
  }

  sendAnnouncement(body:Object) {
  	//let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  	//let options = new RequestOptions({ headers: headers });
    console.log("Ovo je u servisu" + body)
  	// let bodyString = JSON.stringify(body); -- Not needed for now, maybe later
  	return this.http.post('/api/announcements/', body)
  		.map(res => res.json());
  }



}

