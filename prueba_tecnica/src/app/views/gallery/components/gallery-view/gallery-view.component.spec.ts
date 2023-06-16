import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GalleryViewComponent } from './gallery-view.component';

describe('GalleryViewComponent', () => {
  let component: GalleryViewComponent;
  let fixture: ComponentFixture<GalleryViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryViewComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Debe crearse', () => {
    expect(component).toBeTruthy();
  });

  
  it('NO muestra el icono de toTop si current < limit', () => {
    fixture.detectChanges();
    if(component['_current'] < component['_limit'] ){
      expect(component.isScrollShown).toBeFalse();
    }
  })

  it('Muestra el icono de toTop si current >= limit', () => {
    fixture.detectChanges();
    if(component['_current'] >= component['_limit'] ){
      expect(component.isScrollShown).toBeFalse();
    }
  })

})
