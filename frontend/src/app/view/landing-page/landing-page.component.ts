import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  totalPetsAdotados: number;


  constructor() { 
    this.totalPetsAdotados = 2000;
  }

  ngOnInit(): void {
  }

}
