import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css']
})
export class VideoPageComponent implements OnInit {
  videoArray: any = [
    {
      name: 'JDK & Eclipse',
      id: 'b1pDj1gx9zs'
    },
    {
      name: 'System.out.Print',
      id: 'ghDEieyOr8o'
    },
    {
      name: 'Einführung von Int',
      id: '0N5Xc3oQ2-U'
    }
  ];
  url: any;
  name:string;
  video: any = {id: '0N5Xc3oQ2-U'};
  baseUrl:string = 'https://www.youtube.com/embed/';
  constructor(private sanitizer: DomSanitizer) { 
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id);    
  }

  ngOnInit() {
  }

  showVideo(id){
    this.video.id = id;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id);    
  
  }

  


}
