import { Component, OnInit } from '@angular/core';
import { GridItemInterface } from './grid-item.interface';
import * as data from './profile.data.json';

@Component({
  selector: 'app-about-about',
  templateUrl: './about-about.component.html',
  styleUrls: ['./about-about.component.scss']
})
export class AboutAboutComponent implements OnInit {

  gridItems : GridItemInterface[] = (data as any).default;

  constructor() { }

  ngOnInit() {
  }

  showPopup(message: string) {
    alert(message);
  }

}
