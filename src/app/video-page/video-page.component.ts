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
      name: 'Übung 1',
      id: 'b1pDj1gx9zs'
    },
    {
      name: 'Übung 2',
      id: 'ghDEieyOr8o'
    },
    {
      name: 'Übung 3',
      id: '4yfHWLRs6s0'
    },
    {
      name: 'Übung 4',
      id: 'ghDEieyOr8o'
    },
    {
      name: 'Übung 5',
      id: 'ghDEieyOr8o'
    },
    {
      name: 'Übung 6',
      id: 'ghDEieyOr8o'
    },
    {
      name: 'Übung 7',
      id: 'ghDEieyOr8o'
    },
    {
      name: 'Übung 8',
      id: 'ghDEieyOr8o'
    },
    {
      name: 'Übung 9',
      id: 'ghDEieyOr8o'
    },
    {
      name: 'Übung 10',
      id: 'ghDEieyOr8o'
    },
    {
      name: 'Übung 11',
      id: 'ghDEieyOr8o'
    },
    {
      name: 'Übung 12',
      id: 'ghDEieyOr8o'
    },    
    {
      name: 'Übung 13',
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
