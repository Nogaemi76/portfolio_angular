import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  resume_url: string = 'assets/documents/cv_en_devfront.pdf';

  constructor() { }

  ngOnInit() {
  }

  openResumePdf() {
    window.open(this.resume_url, '_blank');
  }

}
