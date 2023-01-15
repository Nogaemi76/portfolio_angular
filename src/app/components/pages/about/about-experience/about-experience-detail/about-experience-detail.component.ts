import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-experience-detail',
  templateUrl: './about-experience-detail.component.html',
  styleUrls: ['./about-experience-detail.component.scss']
})
export class AboutExperienceDetailComponent implements OnInit {

  @Input() selected : any;

  constructor() { }

  ngOnInit() {
    console.log('selectedExperience', this.selected);
  }

}
