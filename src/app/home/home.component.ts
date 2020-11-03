import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FarmBlocService } from '../shared/services/farm-bloc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private farmBlocService: FarmBlocService) { }

  ngOnInit(): void {
    this.farmBlocService.init();
  }

  ngOnDestroy(): void {
    this.farmBlocService.dispose();
  }

  prepareRoute(outlet: RouterOutlet): void {
    return outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState'];
  }
}
