import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../announcement.service';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.css']
})
export class AnnouncementListComponent implements OnInit {

  announcements: any = [];

  constructor(private announcementService: AnnouncementService) { }


  ngOnInit() {
    this.announcementService.getAllAnnouncements().subscribe(announcements => {
      this.announcements = announcements;
    });
  }

  public deleteAnnouncementOnClick = (announcement:any) => { 
	  this.announcementService.deleteAnnouncementWithId(announcement._id).subscribe(announcements => {
      this.announcements = announcements;
    });
	}

}
