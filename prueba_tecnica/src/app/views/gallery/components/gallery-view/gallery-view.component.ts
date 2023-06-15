import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo.model';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.scss'],
})
export class GalleryViewComponent  implements OnInit {

  constructor() { }

  @Input() photoGallery: Array<Photo> = [];

  ngOnInit() {}

}
