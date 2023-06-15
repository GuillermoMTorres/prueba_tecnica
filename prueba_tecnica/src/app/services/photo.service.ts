import { Injectable } from '@angular/core';
import { Photo } from '../models/photo.model';
import { LoaderService} from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private loaderService: LoaderService) {}

  public photoGallery: Array<Photo> = [];

  generateGallery(): void {
    this.loaderService.presentLoader();
        let gallery: Array<Photo> = [];

        for (let i = 1; i <= 20; i++) {
        let photo: Photo = {
            id: i,
            photo: `https://picsum.photos/id/${i}/500/500.jpg`,
            text: 'Una foto con id ' + i 
        } 
        gallery.push(photo);
        }

        this.photoGallery = gallery;
        this.loaderService.dismissLoader();
  }

  getPhoto(id: number): Photo {
    return this.photoGallery.filter((id) => id )[0];
  }

}
