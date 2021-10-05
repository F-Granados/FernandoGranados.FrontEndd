import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Hijo } from 'src/app/models/Hijo';
import { HijosService } from 'src/app/services/hijos.service';

@Component({
  selector: 'app-addhijos',
  templateUrl: './addhijos.component.html',
  styleUrls: ['./addhijos.component.scss']
})
export class AddhijosComponent implements OnInit {
  crearForm:FormGroup;
  hijo:Hijo;
  
 
  constructor(public hijoservice : HijosService,
    public dialog:MatDialog,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    ) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    let idstring = this.router.url;
    let personalId = Number(idstring.slice(15));
    console.log(typeof(personalId),personalId);
    this.hijoservice.formData={
      idpersonal:personalId,
      appaterno:'',
      apmaterno:'',
      nombre1:'',
      nombre2:'',
      nombrecompleto:'',
      fchnac:null,
    }
  }

  insertarHijos(form : NgForm){
      this.hijoservice.addHijos(form.value).subscribe(
      res => {
        console.log(res)
      },
      error=> {
        this.dialog.closeAll();}
    )
    
  }

  cancelar(){
    this.dialog.closeAll();
  }

}
