import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/auth/services/auth.service';
import {UserService, UserSightingService} from '../../../generated/api/services';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss']
})
export class ProfileModalComponent implements OnInit {
  userInfo = {
    user: {},
    sightings: {}
  };

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private modalRef: BsModalRef,
    private userSightingService: UserSightingService,
  ) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.userService.getApiV1UsersMe().subscribe(data => {
      this.userInfo.user = data.user;
      this.loadUserSighting(data.user.id);
    });
  }

  loadUserSighting(id) {
    this.userSightingService.getApiV1UsersIdSightings(id).subscribe(data => {
      this.userInfo.sightings = data.sightings;
    });
  }

  logOut() {
    this.authService.logout();
    parent.document.location.reload();
  }
}
