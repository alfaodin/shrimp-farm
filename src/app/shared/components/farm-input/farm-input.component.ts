import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FarmModel } from '../../models/farm.model';

@Component({
  selector: 'app-farm-input',
  templateUrl: './farm-input.component.html',
  styleUrls: ['./farm-input.component.scss']
})
export class FarmImputComponent implements OnInit {

  @Output() saveNewFarm: EventEmitter<FarmModel> = new EventEmitter<FarmModel>();

  farmForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.farmForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      direction: ['', [Validators.required]],
      manager: [null, [Validators.required]],
      availableExtension: [1, [Validators.required]],
    });
  }

  onSaveNewFarm(): void {
    if (this.farmForm.valid) {
      console.log(this.farmForm.value);
      this.saveNewFarm.emit(this.farmForm.value);
    }
  }

}
