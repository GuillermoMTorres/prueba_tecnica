import { Injectable } from '@angular/core';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor() {}

  public photoGallery: Array<Photo> = [];


  generateGallery(): void{
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
  }

  getPhoto(id: number): Photo {
    return this.photoGallery.filter((id) => id )[0];
  }

}
