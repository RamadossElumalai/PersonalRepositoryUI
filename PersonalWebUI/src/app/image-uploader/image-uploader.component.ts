import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent {

  file:File;
  displyResult: boolean = false;
  displyMessage : string ="";
  @ViewChild('inputFile') myInputVariable: ElementRef;

  constructor(private http:HttpClient) { }


fileChange(event) {
    let fileList: FileList = event.target.files;
    this.file= fileList[0];
}

UploadImages()
{
  if(this.file)
  {
    let formData:FormData = new FormData();
    formData.append('formFile', this.file, this.file.name);
    this.http.post("http://localhost:5000/api/ImageUpload",formData).subscribe((res)=>{
      this.displyResult = true;
      this.displyMessage  ="Image uploaded sucessfully. Please go to the image viewer and see it";
      this.myInputVariable.nativeElement.value = '';
      setTimeout(() => {
        this.displyResult = false;
        this.displyMessage  ="";
      }, 2000);
    });
  }
  else{
    this.displyResult = true;
      this.displyMessage  ="Please select the image";
      setTimeout(() => {
        this.displyResult = false;
        this.displyMessage  ="";
      }, 2000);
  }
  

}

}
