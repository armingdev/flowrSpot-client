import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {AuthService} from '../../../core/auth/services/auth.service';
import {User} from '../../../generated/api/models/user';
import {LoginModalComponent} from '../../modals/login-modal/login-modal.component';
import {RegisterModalComponent} from '../../modals/register-modal/register-modal.component';
import {ProfileModalComponent} from '../../modals/profile-modal/profile-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = this.authService.isLogged;
  currentUser: User;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private authService: AuthService) {}

  openLoginModal() {
    this.modalRef = this.modalService.show(LoginModalComponent, Object.assign({}, { class: 'modal-dialog-centered' }));
  }

  openRegisterModal() {
    this.modalRef = this.modalService.show(RegisterModalComponent, Object.assign({}, { class: 'modal-dialog-centered' }));
  }

  openProfileModal() {
    this.modalRef = this.modalService.show(ProfileModalComponent, Object.assign({}, { class: 'modal-dialog-centered' }));
  }

  getCurrentUser() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
  }
  ngOnInit() {
    if (this.loggedIn) {
      this.getCurrentUser();
    }
  }

}
