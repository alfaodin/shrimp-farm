import { Component, OnInit } from '@angular/core';

import { FarmModel } from '../../shared/models/farm.model';
import { FarmBlocService } from '../../shared/services/farm-bloc.service';

@Component({
  selector: 'app-farm-dashboard',
  templateUrl: './farm-dashboard.component.html',
  styleUrls: ['./farm-dashboard.component.scss']
})
export class FarmDashboardComponent implements OnInit {

  constructor(private farmBlocService: FarmBlocService) { }

  ngOnInit(): void { }

  onSaveNewFarm(farmModel: FarmModel): void {
    this.farmBlocService.createNewFarm(farmModel);
  }

}
