import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent {

  contentImages:any =[];
  
  constructor(private config: NgbCarouselConfig,private http:HttpClient) {
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = true;
    this.GetImages();
  }

  GetImages()
  {
    this.http.get("http://localhost:5000/api/ImageUpload").subscribe((res:[])=>{
      this.contentImages = [];
      res.forEach(element => {
        this.contentImages.push('data:image/png;base64,'+ element);
      });
    });
  }
}
