import { PetService } from './../../Services/Pet.service';
import { Pet } from 'src/app/Models/Pet';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-pet',
  templateUrl: './register-pet.component.html',
  styleUrls: ['./register-pet.component.css']
})
export class RegisterPetComponent implements OnInit {

  registerForm: FormGroup;
  pet: Pet;

  constructor(
    private fb: FormBuilder,
    private petService: PetService,
    ) { }

  ngOnInit(): void {
    this.validation();
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

  validation(){
    this.registerForm =  this.fb.group({
      nomeUsuario: ['',Validators.required],
      whatsapp: ['',Validators.required],
      localizacao: ['',Validators.required],
      nomePet: ['',Validators.required],
      especie: ['',Validators.required],
      sexo: ['',Validators.required],
      foto: ['',Validators.required],
      porteFisico: ['',Validators.required],
      biografia: ['',Validators.required],
      infoEmail: ['',Validators.required],
    });
  }

}


