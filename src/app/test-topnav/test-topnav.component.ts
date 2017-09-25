import { Component, OnInit } from '@angular/core';
import {Test1Component } from '../test1/test1.Component';
import {Test2Component } from '../test2/test2.Component';
import {Test3Component } from '../test3/test3.Component';


@Component({
  selector: 'app-test-topnav',
  templateUrl: './test-topnav.component.html',
  styleUrls: ['./test-topnav.component.css']
})
export class TestTopnavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
