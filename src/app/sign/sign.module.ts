import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { SignComponent } from './sign.component';
import { CoreModule } from '../core/core.module';
import { SignRoutingModule } from './sign-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [SignInComponent, SignComponent],
  imports: [
    CoreModule,
    FormsModule,
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    SignRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ]
})
export class SignModule { }
