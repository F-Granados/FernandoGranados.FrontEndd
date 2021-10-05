import { Component, OnInit } from '@angular/core';
import { Personal } from '../../models/Personal';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {PersonalService} from '../../services/personal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  form:FormGroup;
  datosPersonal:Personal;
  editarForm=new FormGroup({
    idpersonal:new FormControl(''),
    appaterno:new FormControl(''),
    apmaterno:new FormControl(''),
    dni:new FormControl(''),
    nombre1:new FormControl(''),
    nombre2:new FormControl(''),
    nombrecompleto:new FormControl(''),
    fchnac:new FormControl(''),
    fchingreso:new FormControl(''),
  
    
  })  

  constructor(public personalservice : PersonalService,
              private activatedRoute:ActivatedRoute,
              public formulario: FormBuilder,
              private router:Router
    ) { 
      let personalId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      
      console.log(personalId)
      this.personalservice.getPersonalId(personalId).subscribe(
        respuesta=>{
          this.editarForm.setValue({
            idpersonal:respuesta[0]['IdPersonal'],
            appaterno:respuesta[0]['ApPaterno'],
            apmaterno:respuesta[0]['ApMaterno'],
            nombre1:respuesta[0]['Nombre1'],
            nombre2:respuesta[0]['Nombre2'],
            nombrecompleto:respuesta[0]['NombreCompleto'],
            dni:respuesta[0]['Dni'],
            fchnac:respuesta[0]['FchNac'],
            fchingreso:respuesta[0]['FchIngreso'],
          })
      
    })

      this.editarForm=this.formulario.group(
        {
          idpersonal:[''],
          appaterno:[''],
          apmaterno:[''],
          nombre1:[''],
          nombre2:[''],
          dni:[''],
          nombrecompleto:[''],
          fchnac:[''],
          fchingreso :[''],
          
        }
      )
    }

  ngOnInit(): void {
    
  }
  

  enviarDatos():any{
    console.log(this.editarForm.value);
    this.personalservice.updatePersonal(this.editarForm.value).subscribe(
      res=>{},
      error=>{this.router.navigate(["/personal"])}
    )
  }
  cancel(){
    this.router.navigate(["/personal"])
  }

  

  

  

}
