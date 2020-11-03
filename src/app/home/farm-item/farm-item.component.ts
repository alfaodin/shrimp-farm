import { Component, Input, OnInit } from '@angular/core';
import { FarmModel } from '../../shared/models/farm.model';

@Component({
  selector: 'app-farm-item',
  templateUrl: './farm-item.component.html',
  styleUrls: ['./farm-item.component.scss']
})
export class FarmItemComponent implements OnInit {

  @Input() farm: FarmModel;

  constructor() { }

  ngOnInit(): void {
  }

}
