import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skillsTab = true;
  profileTab = false;
  educationTab = false;
  expTab = false;

  constructor() { }

  ngOnInit() {
  }

  showTab(tabname: string) {
    switch(tabname) {
      case 'skills':
        this.profileTab = false;
        this.educationTab = false;
        this.skillsTab = true;
        this.expTab = false;
        break;
      case 'profile':
        this.profileTab = true;
        this.educationTab = false;
        this.skillsTab = false;
        this.expTab = false;
        break;
      case 'education':
        this.profileTab = false;
        this.educationTab = true;
        this.skillsTab = false;
        this.expTab = false;
        break;
      case 'exp':
        this.profileTab = false;
        this.educationTab = false;
        this.skillsTab = false;
        this.expTab = true;
        break;
    }
  }

}
