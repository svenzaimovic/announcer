import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from "../announcement.service";
import { Announcement } from "../announcement"

@Component({
  selector: 'app-announce',
  templateUrl: './announce.component.html',
  styleUrls: ['./announce.component.css']
})
export class AnnounceComponent implements OnInit {

  constructor(private announcementService: AnnouncementService) { }

  announcement = new Announcement('','','','')

  ngOnInit() {
    console.log(this.announcement)
  }

  

    public createAnnouncementOnClick = (announcement:any) => { 
      
		this.announcementService.sendAnnouncement(announcement).subscribe(announcement => {
		  this.announcement = announcement;
    });
  }


}
