import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-skills',
  templateUrl: './about-skills.component.html',
  styleUrls: ['./about-skills.component.scss']
})
export class AboutSkillsComponent implements OnInit {

  skillList = [
    { title : 'Front-end',
      content: ['HTML, CSS, JavaScript', 'Angular, React, jQuery', 'Bootstrap, Angular Material, Nebular, SASS']
    },
    { title : 'UX Design',
      content: ['Wireframing', 'Figma, Sketch, Axure RP', 'InDesign, Photoshop']
    },
    { title: 'Back-end',
      content: ['API REST, Node.js, Express', 'JWT, bCrypt', 'SQL, MySQL, MongoDB']
    },
    { title: 'Autres',
      content: ['Tests unitaires (Jasmine/Karma)', 'GitHub, GitLab, GitKraken', 'Jira, Trello']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
