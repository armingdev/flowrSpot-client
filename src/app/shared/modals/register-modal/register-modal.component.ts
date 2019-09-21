import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../core/auth/services/auth.service';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private authService: AuthService) { }

  registerForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    date_of_birth: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {
  }

  registerUser() {
    this.authService.register(this.registerForm.value).subscribe(data => {
    }, error => {
    });
  }
}
