import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GalleryPage } from './gallery.page';
import { IPhoto } from 'src/app/models/photo.model';
import { GalleryFilterComponent } from './components/gallery-filter/gallery-filter.component';
import { GalleryViewComponent } from './components/gallery-view/gallery-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('GalleryPage', () => {
  let component: GalleryPage;
  let fixture: ComponentFixture<GalleryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryPage, GalleryFilterComponent, GalleryViewComponent],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe existir', () => {
    expect(component).toBeTruthy();
  });

  it('Puede acceder al servicio photoService', () => {
    expect(component.photoService).toBeTruthy();
  });

  it('filteredGallery tiene el mismo tamaño que photoGallery (photoService) si recibe id null, texto null', () => {
    let filteredGallery: Array<IPhoto> = []
    let id: any = null;
    let text: any = null

    component.photoService.generateGallery();
    filteredGallery = component.photoService.photoGallery.filter((value) => {
      if(id && !text){
        return id === value.id;
      }else if(!id && text){
        return value.text.includes(text)
      }else if(id && text){
        return id === value.id && value.text.includes(text)
      }
      return true;
    })
    console.log(component.photoService.photoGallery.length, 'gallery')
    console.log(filteredGallery.length, 'filtered')
    expect(filteredGallery.length === component.photoService.photoGallery.length).toBeTrue();
  });


});
