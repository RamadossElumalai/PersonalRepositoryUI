import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DisplayVideoComponent } from './display-video/display-video.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';


const routes: Routes = [
  { path: '', redirectTo: '/video', pathMatch: 'full' },
  { path: 'image', component: ImageViewerComponent },
  {path:"image-uploader",component:ImageUploaderComponent},
  { path: 'about', component: AboutComponent },
  { path: 'video', component: DisplayVideoComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
