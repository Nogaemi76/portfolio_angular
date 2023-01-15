import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-experience',
  templateUrl: './about-experience.component.html',
  styleUrls: ['./about-experience.component.scss']
})
export class AboutExperienceComponent implements OnInit {

  poto = {
    title: 'Conceptrice Développeuse d\'Applications en Alternance',
    duration: 'Décembre 2020 - Novembre 2021 (1 an)',
    // tasks: ['']
  };
  manufacture = {
    title: 'Stage en Développement Web',
    duration : 'Septembre 2019 (1 mois)',
    tasks: [
      'Refonte du site web de l\'association \'La Parole aux Sourds\' sur WordPress',
      'Thème Avada',
      'Plugins : The Events Calendar, TranslatePress-Multilingual, WP Forms, Smart Slider 3'
    ]
  };

  selectedExp = this.poto;

  constructor() { }

  ngOnInit() {
  }
  selectExp(expName: string) {
    switch(expName) {
      case 'poto':
        this.selectedExp = this.poto;
        console.log('poto');
        console.log('this.selectedExp', this.selectedExp);
        break;
      case 'manufacture':
        this.selectedExp = this.manufacture;
        console.log('manufacture');
        console.log('this.selectedExp', this.selectedExp);
        break;
      default:
        this.selectedExp = this.poto;
    }
  }

}
