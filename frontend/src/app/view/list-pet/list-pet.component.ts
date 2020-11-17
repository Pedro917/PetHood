import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-pet',
  templateUrl: './list-pet.component.html',
  styleUrls: ['./list-pet.component.css']
})

export class ListPetComponent implements OnInit {

  _filtroListaEspecie: string;

  get filtroLista():string{
    return this._filtroListaEspecie;
  }
  set filtroLista(value:string){
    this._filtroListaEspecie = value;
    this.petsFiltrados = this.filtroLista ? this.filtrarPets(this.filtroLista) : this.pets;
  }

  pets: any = [];
  petsFiltrados: any = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPets();
  }

  filtrarPets(filtrarPor: string): any{
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.pets.filter(
      pet => pet.especie.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

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

  getPets(){
    this.http.get("https://localhost:44362/v1/Pets").subscribe(response => {
      this.pets = response;
      console.log(this.pets);
    }, error =>{
      console.log(error);
    });
  }

}


