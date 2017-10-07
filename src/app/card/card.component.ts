import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  datas = [{
    photo: "사진1"
  },
  {
    photo: "사진2"
  },
  {
    photo: "사진3"

  }];
  constructor() { }

  ngOnInit() {
  }

}
