import { Component, OnInit, ViewChild } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { IPhoto } from 'src/app/models/photo.model';
import { IonContent, LoadingController } from '@ionic/angular';
import { IFormFilter } from 'src/app/models/form-filter.model';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-gallery',
  templateUrl: 'gallery.page.html',
  styleUrls: ['gallery.page.scss'],
})

export class GalleryPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;
  public photoGallery: Array<IPhoto> = [];
  public showScroll: boolean = false;

  constructor(public photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoGallery = this.photoService.photoGallery
  }

  public scrollToTop(): void {
    this.content.scrollToTop(1000);
  }

  public filterGallery(photoData: IFormFilter): void{

    this.photoService.filterGallery(photoData).subscribe(rs => {
      console.log(rs, 'rs');
      this.photoGallery = rs;
      this.showScroll = false;
    })
  }
}
