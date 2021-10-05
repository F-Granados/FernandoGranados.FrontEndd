import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { CPersonal, Personal } from '../models/Personal';
import { GLOBAL } from '../api';


@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  
  public url:string;
  cpersonal:CPersonal[];
  
   formData: Personal;  
   list : Personal[];

  constructor(public _http:HttpClient) {
      this.url = GLOBAL.api_uri;
      
   }


  getPersonal():Observable<CPersonal[]>{
    return this._http.get<CPersonal[]>(`${this.url}/persona`);
  }

  getPersonalId(id:number):Observable<CPersonal[]>{
    return this._http.get<CPersonal[]>(`${this.url}/persona/${id}`);
  }
  
  addPersonal(personal : Personal):Observable<Personal>
  {
    return this._http.post(`${this.url}/persona`, personal);
  }

  updatePersonal(personal:Personal):Observable<Personal>{
    return this._http.put(`${this.url}/persona/modificar`,personal);
  }

  deletePersonal(id:number){
    return this._http.delete(`${this.url}/persona/${id}`);
  }

}
