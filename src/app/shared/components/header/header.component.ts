import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {AuthService} from '../../../core/auth/services/auth.service';
import {User} from '../../../generated/api/models/user';
import {LoginModalComponent} from '../../modals/login-modal/login-modal.component';
import {RegisterModalComponent} from '../../modals/register-modal/register-modal.component';
import {ProfileModalComponent} from '../../modals/profile-modal/profile-modal.component';
import {AuthDataService} from '../../../core/auth/services/auth-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private authService: AuthService, private authDataService: AuthDataService) {}

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
    this.authDataService.authData.subscribe(x => {
      this.getCurrentUser();
    });
  }

}
