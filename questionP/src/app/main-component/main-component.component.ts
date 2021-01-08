import { Component, OnInit } from '@angular/core';
import {AppRoutingModule} from '../app-routing.module';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  constructor(private rouer: AppRoutingModule) { }

  ngOnInit(): void {
  }

}
