import { Injectable } from '@angular/core';
import { IPhoto } from '../models/photo.model';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private loaderService: LoaderService) { }

  public photoGallery: Array<IPhoto> = [];

  generateGallery(): void {
    this.loaderService.present();
    let gallery: Array<IPhoto> = [];

    for (let i = 1; i <= 4000; i++) {
      if (i !== 4000) {
        let photo: IPhoto = {
          id: i,
          photo: `https://picsum.photos/id/${i}/500/500.jpg`,
          text: 'Una foto con id ' + i
        }
        gallery.push(photo);
      }
      else {
        let photo: IPhoto = {
          id: i,
          photo: `https://picsum.photos/id/${i}/500/500.jpg`,
          text: 'Foto con diferente texto para el filtro con id 9999'
        }
        gallery.push(photo);
      }
    }

    this.photoGallery = gallery;
    this.loaderService.dismiss();
  }

  getPhoto(id: number): IPhoto {
    return this.photoGallery.filter((id) => id)[0];
  }

}
