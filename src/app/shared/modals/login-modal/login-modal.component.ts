import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../core/auth/services/auth.service';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private authService: AuthService) {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {
  }

  logIn() {
    this.authService.login(this.loginForm.value).subscribe(data => {
    }, error => {
    });
  }
}
