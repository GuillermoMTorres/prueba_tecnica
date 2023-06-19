import { Injectable } from '@angular/core';
import { IPhoto } from '../models/photo.model';
import { LoaderService } from './loader.service';
import { IFormFilter } from '../models/form-filter.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private loader: LoaderService) { }

  public photoGallery: Array<IPhoto> = [];

  generateGallery(): void {
    this.loader.present();
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
    this.loader.dismiss();
  }

   public filterGallery(photoData: IFormFilter): Observable<IPhoto[]>{
    
    const data = new Observable<IPhoto[]>((obs) => {

      let filteredGallery: Array<IPhoto> = []

      this.loader.present();

      filteredGallery = this.photoGallery.filter((value) => {
        if(photoData.id && !photoData.text){
          return photoData.id === value.id;
        }else if(!photoData.id && photoData.text){
          return value.text.includes(photoData.text)
        }else if(photoData.id && photoData.text){
          return photoData.id === value.id && value.text.includes(photoData.text)
        }
        return true;
      })
      
      
      obs.next(filteredGallery);
      obs.complete();
      this.loader.dismiss();
    })
    return data;
  }
}
