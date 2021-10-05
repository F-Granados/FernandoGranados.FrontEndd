import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { CHijo,Hijo } from '../models/Hijo';
import { GLOBAL } from '../api';



@Injectable({
  providedIn: 'root'
})
export class HijosService {
  
  public url:string;
  cpersonal:CHijo[];
  
   formData: Hijo;  
   list : Hijo[];

  constructor(public _http:HttpClient) {
      this.url = GLOBAL.api_uri;
      
   }

  getHijosById(id:number):Observable<CHijo[]>{
    return this._http.get<CHijo[]>(`${this.url}/hijo/${id}`);
  }
  addHijos(hijo:Hijo):Observable<Hijo>{
    return this._http.post(`${this.url}/hijo`,hijo);
  }
  updateHijos(hijo:Hijo):Observable<Hijo>{
    return this._http.put<Hijo>(`${this.url}/hijo/modificar`,hijo)
  }
  getHijoDetalle(idderhab:number):Observable<CHijo[]>{
    return this._http.get<CHijo[]>(`${this.url}/hijo/filtrar/${idderhab}`);
  }
  deleteHijo(idderhab:number){
    return this._http.delete(`${this.url}/hijo/${idderhab}`);
  }


}