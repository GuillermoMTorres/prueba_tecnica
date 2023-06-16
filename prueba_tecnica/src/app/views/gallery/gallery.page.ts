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

  constructor(public photoService: PhotoService,
              public loader: LoaderService,
              public loadingCtrl: LoadingController) {}

  @ViewChild(IonContent) content: IonContent;
  public photoGallery: Array<IPhoto> = [];
  public showScroll: boolean = false;

  ngOnInit(): void {
    this.photoGallery = this.photoService.photoGallery
  }

  public scrollToTop(): void {
    this.content.scrollToTop(1000);
  }

  async filterGallery(photoData: IFormFilter){
    this.loader.present();   
    
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
    this.loader.dismiss();
    console.log(this.photoGallery, 'photog')
  }
}
