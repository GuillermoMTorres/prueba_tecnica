import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryPage } from './gallery.page';
import { GalleryFilterComponent } from './components/gallery-filter/gallery-filter.component';
import { GalleryViewComponent } from './components/gallery-view/gallery-view.component';
import { GalleryPageRoutingModule } from './gallery-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalleryPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GalleryPage, GalleryFilterComponent, GalleryViewComponent]
})
export class GalleryPageModule {}
