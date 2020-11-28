import { Breed } from './../../Models/Breed';
import { PetService } from './../../Services/Pet.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Pet } from 'src/app/Models/Pet';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-list-pet',
  templateUrl: './list-pet.component.html',
  styleUrls: ['./list-pet.component.css']
})

export class ListPetComponent implements OnInit {

  _filtroListaEspecie: string;
  _filtroListaRaca: string;
  pets: Pet[];
  breeds: Breed[];
  petModal: Pet;
  petsFiltrados: Pet[];
  formulario: FormGroup;
  pet: Pet;
  petTo: Pet;
  bodyDeletarPet: string;

  constructor(
    private petService: PetService,
    private modalService: BsModalService,
    private fb: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.getPets();
    this.configurarForm();
    this.getBreeds();
  }

  get filtroLista():string{
    return this._filtroListaEspecie;
  }
  set filtroLista(value:string){
    this._filtroListaEspecie = value;
    this.petsFiltrados = this.filtroLista ? this.filtrarPets(this.filtroLista) : this.pets;
  }

  get filtroListaRaca():string{
    return this._filtroListaRaca;
  }
  set filtroListaRaca(value:string){
    this._filtroListaRaca = value;
    this.petsFiltrados = this.filtroListaRaca ? this.filtrarPetsRaca(this.filtroListaRaca) : this.pets;
  }

  filtrarPets(filtrarPor: string): Pet[]{
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.pets.filter(
      pet => pet.especie.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  filtrarPetsRaca(filtrarPor: string): Pet[]{
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.pets.filter(
      pet => pet.raca.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  getPets(){
    this.petService.getPet().subscribe((_pet : Pet[]) => {
      this.pets = _pet;
      this.petsFiltrados = this.pets;
      console.log(this.pets);
    }, error =>{
      console.log(error);
    });
  }

  getBreeds(){
    this.petService.getBreed().subscribe((_breed : Breed[]) => {
      this.breeds = _breed;
      console.log(this.breeds);
    }, error =>{
      console.log(error);
    });
  }

  openModal(template: any){
    template.show();
  }

  openPerfilPet(pet: Pet, template: any){
    this.openModal(template);
    this.petModal = pet;
  }

  openEditPet(pet: Pet, template: any){
    this.formulario.reset();
    this.openModal(template);
    this.petModal = pet;
    this.formulario.patchValue(pet);
  }

  excluirPet(pet: Pet, template: any) {
    this.openModal(template);
    this.petModal = pet;
    this.bodyDeletarPet = `Tem certeza que deseja excluir o Pet: ${pet.nomePet}, Código: ${pet.id}`;
  }

  configurarForm(){
    this.formulario = this.fb.group({
      nomeUsuario: ['',Validators.required],
      whatsapp: ['',Validators.required],
      localizacao: ['',Validators.required],
      nomePet: ['',Validators.required],
      especie: ['',Validators.required],
      raca: ['',Validators.required],
      sexo: ['',Validators.required],
      foto: ['',Validators.required],
      porteFisico: ['',Validators.required],
      biografia: ['',Validators.required],
    });
  }

  editar(template:any){
    if(this.formulario.valid){
      this.petTo = Object.assign({id: this.petModal.id, infoEmail: this.petModal.infoEmail}, this.formulario.value);
      this.petService.putPet(this.petTo).subscribe(
        () => {
        }, error => {
          console.log(error);
          this.getPets();
        }
      );
    }
    template.hide();
    
  }

  confirmeDelete(template: any) {
    this.petService.deletePet(this.petModal.id).subscribe(
      () => {
          template.hide();
          this.getPets();
        }, error => {
          console.log(error);
        }
    );
  }

}


