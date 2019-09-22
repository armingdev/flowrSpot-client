import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../core/auth/services/auth.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {LoginModalComponent} from '../login-modal/login-modal.component';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {
  registerSuccess = false;

  constructor(private authService: AuthService, private modalRef: BsModalRef, private modalService: BsModalService) { }

  registerForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    date_of_birth: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {
  }

  openLoginModal() {
    this.modalRef = this.modalService.show(LoginModalComponent, Object.assign({}, { class: 'modal-dialog-centered' }));
  }

  registerUser() {
    this.authService.register(this.registerForm.value).subscribe(data => {
      this.registerSuccess = true;
    }, error => {
    });
  }
}
