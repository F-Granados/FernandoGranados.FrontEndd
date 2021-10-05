import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import {PersonalService} from '../../services/personal.service';
import {MatDialog} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Personal } from 'src/app/models/Personal';


@Component({
  selector: 'app-dialogpersonal',
  templateUrl: './dialogpersonal.component.html',
  styleUrls: ['./dialogpersonal.component.scss']
})
export class DialogpersonalComponent implements OnInit {
  
  constructor(public personalservice : PersonalService,
              public dialog:MatDialog,
              ) { }

  ngOnInit(): void {
    this.resetForm();
    
  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.personalservice.formData={
      idpersonal:null,
      appaterno:'',
      apmaterno:'',
      nombre1:'',
      nombre2:'',
      nombrecompleto:'',
      Dni:'',
      fchnac:null,
      fchingreso:null,
    }
  }
  
  
  

  insertarPersonal(form : NgForm){
    this.personalservice.addPersonal(form.value).subscribe(
      res => {
        console.log(res);
      },
      error=>{
          this.dialog.closeAll();
        }
    )
    console.log('Formulario:',form);
  }
  
 
  // showDialog(){
  //   this.dialog.closeAll();
  // }
  
  cancelar(){
    this.dialog.closeAll();
  }
  
}
