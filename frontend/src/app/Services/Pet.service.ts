import { Pet } from './../Models/Pet';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  baseUrl = 'https://localhost:44362/v1/Pets';

  constructor(private http: HttpClient) { }

  getPet(): Observable<Pet[]>{
    return this.http.get<Pet[]>(this.baseUrl);
  }

}
