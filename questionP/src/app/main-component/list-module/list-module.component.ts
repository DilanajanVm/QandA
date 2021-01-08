import { Component, OnInit } from '@angular/core';
import {AppRoutingModule} from '../../app-routing.module';


@Component({
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.css']
})
export class ListModuleComponent implements OnInit {
  constructor(private router: AppRoutingModule) { }
  title = '';

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  navigateToQA() {
    console.log('Clicked Button!');

  }
}
