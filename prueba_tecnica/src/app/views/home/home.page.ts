import { Component, OnInit } from '@angular/core';
import { PhotoService } from './../../services/photo.service';
import { Photo } from 'src/app/models/photo.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public photoService: PhotoService) {}

  public photoGallery: Array<Photo> = [];

  ngOnInit(): void {
    this.photoGallery = this.photoService.photoGallery
  }

}
