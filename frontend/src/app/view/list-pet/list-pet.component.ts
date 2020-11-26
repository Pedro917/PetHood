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
  pets: Pet[];
  petModal: Pet;
  petsFiltrados: Pet[];
  formulario: FormGroup;
  pet: Pet;

  constructor(
    private petService: PetService,
    private modalService: BsModalService,
    private fb: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.getPets();
    this.configurarForm();
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
    this.petService.getPet().subscribe((_pet : Pet[]) => {
      this.pets = _pet;
      this.petsFiltrados = this.pets;
      console.log(this.pets);
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

  configurarForm(){
    this.formulario = this.fb.group({
      nomeUsuario: ['',Validators.required],
      whatsapp: ['',Validators.required],
      localizacao: ['',Validators.required],
      nomePet: ['',Validators.required],
      especie: ['',Validators.required],
      sexo: ['',Validators.required],
      foto: ['',Validators.required],
      porteFisico: ['',Validators.required],
      biografia: ['',Validators.required],
    });
  }

  editar(template:any){
    console.log(this.petModal.id);
    template.hide();
    
  }

}


