import { PetService } from './../../Services/Pet.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Pet } from 'src/app/Models/Pet';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list-pet',
  templateUrl: './list-pet.component.html',
  styleUrls: ['./list-pet.component.css']
})

export class ListPetComponent implements OnInit {

  _filtroListaEspecie: string;
  modalRef: BsModalRef;
  pets: Pet[];
  petsFiltrados: Pet[];

  constructor(
    private petService: PetService,
    private modalService: BsModalService
    ) { }

  ngOnInit(): void {
    this.getPets();
  }

  get filtroLista():string{
    return this._filtroListaEspecie;
  }
  set filtroLista(value:string){
    this._filtroListaEspecie = value;
    this.petsFiltrados = this.filtroLista ? this.filtrarPets(this.filtroLista) : this.pets;
  }

  filtrarPets(filtrarPor: string): Pet[]{
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.pets.filter(
      pet => pet.especie.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  getPets(){
    this.petService.getPet().subscribe((_evento : Pet[]) => {
      this.pets = _evento;
      this.petsFiltrados = this.pets;
      console.log(this.pets);
    }, error =>{
      console.log(error);
    });
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }


  




  

}


