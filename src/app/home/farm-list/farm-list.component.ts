import { Component, OnInit } from '@angular/core';

import { FarmBlocService } from '../../shared/services/farm-bloc.service';

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.scss']
})
export class FarmListComponent implements OnInit {
  farmList$ = this.farmBlocService.farmList;

  constructor(private farmBlocService: FarmBlocService) { }

  ngOnInit(): void {
  }

}
