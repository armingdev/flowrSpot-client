import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../core/auth/services/auth.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ProfileModalComponent} from '../profile-modal/profile-modal.component';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  loginSuccess = false;
  loginError = false;

  constructor(private modalService: BsModalService, private authService: AuthService, private modalRef: BsModalRef) {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {
  }

  logIn() {
    this.authService.login(this.loginForm.value).subscribe(data => {
      this.loginSuccess = true;
      this.loginError = false;
    }, error => {
      this.loginError = error.error.error;
    });
  }

  openProfileModal() {
    this.modalRef = this.modalService.show(ProfileModalComponent, Object.assign({}, { class: 'modal-dialog-centered' }));
  }
}
