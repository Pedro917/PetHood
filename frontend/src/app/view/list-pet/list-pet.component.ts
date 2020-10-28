import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-pet',
  templateUrl: './list-pet.component.html',
  styleUrls: ['./list-pet.component.css']
})
export class ListPetComponent implements OnInit {

  contCurtidas: number = 1000;
  btnCurtidaStatus: boolean = false;

  curtir(){
    this.btnCurtidaStatus = !this.btnCurtidaStatus;
  }

  curtida(){
    if(!this.btnCurtidaStatus){
      this.contCurtidas++
    }else{
      this.contCurtidas--
    }
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
