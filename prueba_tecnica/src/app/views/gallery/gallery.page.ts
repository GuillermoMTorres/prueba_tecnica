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

  constructor(public photoService: PhotoService,
              private _loaderService: LoaderService) {}

  ngOnInit(): void {
    this.photoGallery = this.photoService.photoGallery
  }

  public scrollToTop(): void {
    this.content.scrollToTop(1000);
  }

  public  async filterGallery(photoData: IFormFilter): Promise<void>{
    this._loaderService.present();   
    
    let filteredGallery: Array<IPhoto> = []

    filteredGallery = this.photoService.photoGallery.filter((value) => {
      if(photoData.id && !photoData.text){
        return photoData.id === value.id;
      }else if(!photoData.id && photoData.text){
        return value.text.includes(photoData.text)
      }else if(photoData.id && photoData.text){
        return photoData.id === value.id && value.text.includes(photoData.text)
      }
      return true;
    })

    this.photoGallery = filteredGallery;
    this.showScroll = false;
    this._loaderService.dismiss();
  }
}
