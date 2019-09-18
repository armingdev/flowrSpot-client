import { Component, OnInit } from '@angular/core';
import {FlowerService} from '../../../../generated/api/services';
import {Flower} from '../../../../generated/api/models';

@Component({
  selector: 'app-list-flowers',
  templateUrl: './list-flowers.component.html',
  styleUrls: ['./list-flowers.component.scss']
})
export class ListFlowersComponent implements OnInit {
  flowers: Flower[];

  constructor(private flowerService: FlowerService) { }

  ngOnInit() {
    this.loadFlowers();
  }

  loadFlowers() {
    this.flowerService.getApiV1Flowers(1).subscribe(data => {
      this.flowers = data.flowers;
    });
  }
}
