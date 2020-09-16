import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-display-video',
  templateUrl: './display-video.component.html',
  styleUrls: ['./display-video.component.css']
})
export class DisplayVideoComponent implements OnInit {

  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;

  ngOnInit(): void {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.play();
  }

  
}