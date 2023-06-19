import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IPhoto } from 'src/app/models/photo.model';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.scss'],
})
export class GalleryViewComponent  implements OnInit, OnChanges {

  constructor() { }

  @Input() photoGallery: Array<IPhoto> = [];
  @Output() canScroll = new EventEmitter<boolean>();

  private limit: number = 20;
  private current: number = 0;
  private isScrollShown: boolean = false;
  public photoGalleryShow: Array<IPhoto> = [];

  ngOnInit() {
    this._loadPhotoGalleryShow();
  }

  ngOnChanges() {
    this.current = 0;
    this.isScrollShown = false;
    this._loadPhotoGalleryShow();
  }

  public onIonInfinite(ev: any): void {
    this._loadPhotoGalleryShow();
    if(!this.isScrollShown){
      this.canScroll.emit(true);
      this.isScrollShown = true;
    }
    (ev as InfiniteScrollCustomEvent).target.complete();
  }

  private _loadPhotoGalleryShow(): void {
    this.current += this.limit;
    this.photoGalleryShow = this.photoGallery.slice(0, this.current);
  }

  imageNotFoundHandler(event: any): void {
    console.debug(event);
    event.target.src = "./assets/images/not-found.png";
 }
}
