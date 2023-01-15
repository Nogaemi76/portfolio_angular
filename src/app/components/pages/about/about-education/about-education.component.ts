import { Component, OnInit } from '@angular/core';
import { SlideInterface } from 'src/app/components/shared/slider/slide.interface';
import * as data from './education.data.json';

@Component({
  selector: 'app-about-education',
  templateUrl: './about-education.component.html',
  styleUrls: ['./about-education.component.scss']
})
export class AboutEducationComponent implements OnInit {

  slides: SlideInterface[] = (data as any).default;

  constructor() { }

  ngOnInit() {
  }

}
