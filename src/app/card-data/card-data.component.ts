import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-data',
  templateUrl: './card-data.component.html',
  styleUrls: ['./card-data.component.css']
})
export class CardDataComponent implements OnInit {
  @Input() post;
  photo = "사진";

  constructor() { }

  ngOnInit() {
  }

}
