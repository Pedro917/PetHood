import { Breed } from './../../Models/Breed';
import { PetService } from './../../Services/Pet.service';
import { Pet } from 'src/app/Models/Pet';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-register-pet',
  templateUrl: './register-pet.component.html',
  styleUrls: ['./register-pet.component.css']
})
export class RegisterPetComponent implements OnInit {

  registerForm: FormGroup;
  pet: Pet;
  breeds: Breed[];
  breed: Breed;
  breedTo: Breed;
  modalRef: BsModalRef;
  register: FormGroup;
  editBreed: FormGroup;


  constructor(
    private fb: FormBuilder,
    private petService: PetService,
    private modalService: BsModalService,
    ) { }

  ngOnInit(): void {
    this.validation();
    this.getBreeds();
    this.validationBreed();
    this.validationBreed2();
  }

  getBreeds(){
    this.petService.getBreed().subscribe((_breed : Breed[]) => {
      this.breeds = _breed;
      console.log(this.breeds);
    }, error =>{
      console.log(error);
    });
  }

  salvarAlteracao(){
    if(this.registerForm.valid){
      this.pet = Object.assign({}, this.registerForm.value);
      this.petService.postPet(this.pet).subscribe(
        (novoPet: Pet) => {
          console.log(novoPet);
        }, error => {
          console.log(error);
        }
      );
    }
  }

  editarBreed(template: any){
    if(this.editBreed.valid){
      this.breedTo = Object.assign({id: this.breed.id}, this.editBreed.value);
      this.petService.putBreed(this.breedTo).subscribe(
        () => {
          this.getBreeds();
          template.hide();
        }, error => {
          console.log(error);
        }
      );
    }
    
  }

  deleteBreed(breed: Breed) {
    this.petService.deleteBreed(breed.id).subscribe(
      () => {
          this.getBreeds();
          console.log("Deletado");
        }, error => {
          console.log(error);
        }
    );
  }

  cadastrar(template: any){
    if(this.register.valid){
      this.breed = Object.assign({}, this.register.value);
      this.petService.postBreed(this.breed).subscribe(
        (novoBreed: Breed) => {
          console.log(novoBreed);
          this.getBreeds();
        }, error => {
          console.log(error);
        }
      )
    }
    template.hide();
  }

  validation(){
    this.registerForm =  this.fb.group({
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
      infoEmail: ['',Validators.required],
    });
  }

  validationBreed(){
    this.register =  this.fb.group({
      descricao: ['',Validators.required],
    });
  }

  validationBreed2(){
    this.editBreed =  this.fb.group({
      descricao: ['',Validators.required],
    });
  }

  openModal(template: any){
    this.register.reset();
    template.show();
  }

  editModal(breedModal: Breed,template1: any, template2:any){
    template2.hide();
    template1.show();
    this.editBreed.reset();
    this.breed = breedModal;
    this.editBreed.patchValue(this.breed);
  }

}


