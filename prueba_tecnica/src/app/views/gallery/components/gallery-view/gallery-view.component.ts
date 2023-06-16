import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IPhoto } from 'src/app/models/photo.model';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.scss'],
})
export class GalleryViewComponent  implements OnChanges {

  @Input() photoGallery: Array<IPhoto> = [];
  @Output() canScroll = new EventEmitter<boolean>();

  private _limit: number = 20;
  private _current: number = 0;
  public isScrollShown: boolean = false;
  public photoGalleryShow: Array<IPhoto> = [];

  constructor() { }
  
  ngOnChanges(): void {
    this._current = 0;
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
    this._current += this._limit;
    this.photoGalleryShow = this.photoGallery.slice(0, this._current);
  }

  onImgError(event: any){
    event.target.src = "./assets/imgs/not-found.jpg"
   }

}
