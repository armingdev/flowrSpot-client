import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../core/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private authService: AuthService) {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  registerForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    date_of_birth: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-dialog-centered' })
    );
  }

  registerUser() {
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  logIn() {
    this.authService.login(this.loginForm.value).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  logOut() {
    this.authService.logout();
  }

  getProfile() {

  }
  ngOnInit() {
    }

}
