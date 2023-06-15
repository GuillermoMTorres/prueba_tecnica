import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Photo } from 'src/app/models/photo.model';

@Component({
  selector: 'app-gallery',
  templateUrl: 'gallery.page.html',
  styleUrls: ['gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  constructor(public photoService: PhotoService) {}

  public photoGallery: Array<Photo> = [];

  ngOnInit(): void {
    this.photoGallery = this.photoService.photoGallery
  }

}
