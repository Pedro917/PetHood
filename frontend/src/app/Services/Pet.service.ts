import { Breed } from './../Models/Breed';
import { Pet } from './../Models/Pet';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  petUrl = 'https://localhost:44362/v1/Pets';
  breedUrl = 'https://localhost:44362/v1/Breeds';

  constructor(private http: HttpClient) { }

  getPet(): Observable<Pet[]>{
    return this.http.get<Pet[]>(this.petUrl);
  }

  postPet(pet: Pet){
    return this.http.post(this.petUrl, pet);
  }

  putPet(pet: Pet){
    return this.http.put(`${this.petUrl}/${pet.id}`, pet);
  }

  deletePet(id: number){
    return this.http.delete(`${this.petUrl}/${id}`);
  }


  //Breeds

  getBreed(): Observable<Breed[]>{
    return this.http.get<Breed[]>(this.breedUrl);
  }

  postBreed(breed: Breed){
    return this.http.post(this.breedUrl, breed);
  }

  putBreed(breed: Breed){
    return this.http.put(`${this.breedUrl}/${breed.id}`, breed);
  }

  deleteBreed(id: number){
    return this.http.delete(`${this.breedUrl}/${id}`);
  }

}
