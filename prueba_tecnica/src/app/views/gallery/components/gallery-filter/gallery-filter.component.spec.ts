import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GalleryFilterComponent } from './gallery-filter.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('GalleryFilterComponent', () => {
  let component: GalleryFilterComponent;
  let fixture: ComponentFixture<GalleryFilterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryFilterComponent ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Debe crearse', () => {
    expect(component).toBeTruthy();
  });

  it('filterForm es valido si ID null y Texto null', () => {
    let ID = component.filterForm.controls['id'];
    let text = component.filterForm.controls['text'];

    ID.setValue(null);
    text.setValue(null);
    expect(component.filterForm.invalid).toBeFalse();
  });

  it('filterForm es valido si ID = 5 y Texto null', () => {
    let ID = component.filterForm.controls['id'];
    let text = component.filterForm.controls['text'];

    ID.setValue(5);
    text.setValue(null);
    expect(component.filterForm.invalid).toBeFalse();
  });

  it('filterForm es valido si ID = null y Texto = "5" ', () => {
    let ID = component.filterForm.controls['id'];
    let text = component.filterForm.controls['text'];

    ID.setValue(null);
    text.setValue('5');
    expect(component.filterForm.invalid).toBeFalse();
  });

  it('filterForm es valido si ID = 5 y Texto = "5" ', () => {
    let ID = component.filterForm.controls['id'];
    let text = component.filterForm.controls['text'];

    ID.setValue(5);
    text.setValue('5');
    expect(component.filterForm.invalid).toBeFalse();
  });

  it('filterForm NO es valido si ID = "5" (string) y Texto = "5" ', () => {
    let ID = component.filterForm.controls['id'];
    let text = component.filterForm.controls['text'];

    ID.setValue('5');
    text.setValue('5');
    expect(component.filterForm.invalid).toBeTrue();
  });
});
