import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-lista',
  templateUrl: './modal-lista.component.html',
  styleUrls: ['./modal-lista.component.css']
})
export class ModalListaComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPets();
  }

  pets: any;

  getPets(){
    this.http.get("https://localhost:44362/v1/Pets").subscribe(response => {
      this.pets = response;
      console.log(this.pets);
    }, error =>{
      console.log(error);
    });
  }

}
