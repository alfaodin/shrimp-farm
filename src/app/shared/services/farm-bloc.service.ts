import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFirestore } from '@angular/fire/firestore';

import { FarmModel } from '../models/farm.model';
import { AuthService } from '../../core/auth/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FarmBlocService {

  private farmSubscription: Subscription;

  private newFarm$: BehaviorSubject<FarmModel> = new BehaviorSubject<FarmModel>(null);
  private farmList$: BehaviorSubject<FarmModel[]> = new BehaviorSubject<FarmModel[]>([]);

  constructor(
    private db: AngularFirestore,
    private snackBar: MatSnackBar,
    private authService: AuthService,
  ) { }

  dispose(): void {
    if (this.newFarm$) {
      this.newFarm$.unsubscribe();
      this.newFarm$ = null;
    }

    if (this.farmList$) {
      this.farmList$.unsubscribe();
      this.farmList$ = null;
    }

    if (this.farmSubscription) {
      this.farmSubscription.unsubscribe();
      this.farmSubscription = null;
    }
  }


  public get farmList(): Observable<FarmModel[]> {
    return this.farmList$.asObservable();
  }


  init(): void {
    this.farmSubscription = this.db.collection('farms').valueChanges()
      .subscribe((data: any) => {
        this.farmList$.next(data);
        console.log(data.length);
      });
  }

  createNewFarm(farm: FarmModel): void {
    const currentUser = this.authService.getCurrentUser();
    const newFarm = {
      ...farm,
      creationTime: Date.now(),
      createdBy: currentUser.uid,

    };
    this.db.collection('farms').add(newFarm).then(
      data => this.openSnackBar('New Farm created!', 'Success'),
    );
  }

  private openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
