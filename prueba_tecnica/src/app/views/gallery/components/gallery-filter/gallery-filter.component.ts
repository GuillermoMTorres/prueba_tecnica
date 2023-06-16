import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IFormFilter } from 'src/app/models/form-filter.model';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'app-gallery-filter',
  templateUrl: './gallery-filter.component.html',
  styleUrls: ['./gallery-filter.component.scss'],
})
export class GalleryFilterComponent {

  public filterForm = new FormGroup({
    id: new FormControl(),
    text: new FormControl(),
  }, [this.formValidator.filterValidator()]);

  @Output() submited = new EventEmitter<IFormFilter>();

  constructor(public formValidator: ValidatorService) { }

  public onSubmit(): void {
    this.submited.emit({id: this.filterForm.value.id || null, text: this.filterForm.value.text || null})
  }
}
