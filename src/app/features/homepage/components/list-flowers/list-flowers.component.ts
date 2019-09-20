import { Component, OnInit } from '@angular/core';
import {FavoriteService, FlowerService} from '../../../../generated/api/services';
import {Flower} from '../../../../generated/api/models';
import {AuthService} from '../../../../core/auth/services/auth.service';

@Component({
  selector: 'app-list-flowers',
  templateUrl: './list-flowers.component.html',
  styleUrls: ['./list-flowers.component.scss']
})
export class ListFlowersComponent implements OnInit {
  flowers: Flower[];
  loggedIn: boolean = this.authService.isLogged;

  constructor(private flowerService: FlowerService, private favoriteService: FavoriteService, private authService: AuthService) { }

  ngOnInit() {
    this.loadFlowers();
  }


  loadFlowers() {
    this.flowerService.getApiV1Flowers(1).subscribe(data => {
      this.flowers = data.flowers;
    });
  }

  favoriteFlower(flowerId) {
    this.favoriteService.postApiV1FlowersFlowerIdFavorites(flowerId).subscribe(data => {
    });
  }
}
