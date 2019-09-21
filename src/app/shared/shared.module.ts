import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap';
import { LoginModalComponent } from './modals/login-modal/login-modal.component';
import { RegisterModalComponent } from './modals/register-modal/register-modal.component';
import { ProfileModalComponent } from './modals/profile-modal/profile-modal.component';



@NgModule({
  declarations: [HeaderComponent, LoginModalComponent, RegisterModalComponent, ProfileModalComponent],
  entryComponents: [
    LoginModalComponent,
    RegisterModalComponent,
    ProfileModalComponent
  ],
  exports: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BsDatepickerModule
  ]
})
export class SharedModule { }
