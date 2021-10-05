import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hijo } from 'src/app/models/Hijo';
import { HijosService } from 'src/app/services/hijos.service';

@Component({
  selector: 'app-edithijos',
  templateUrl: './edithijos.component.html',
  styleUrls: ['./edithijos.component.scss']
})
export class EdithijosComponent implements OnInit {

  nombre="";
  form:FormGroup;
  datosHijos:Hijo;
  editarForm=new FormGroup({
    idderhab:new FormControl(''),
    idpersonal:new FormControl(''),
    appaterno:new FormControl(''),
    apmaterno:new FormControl(''),
    nombre1:new FormControl(''),
    nombre2:new FormControl(''),
    nombrecompleto:new FormControl(''),
    fchnac:new FormControl(''),
    
  })  

  constructor(public hijoservice: HijosService,
    private activatedRoute:ActivatedRoute,
    public formulario: FormBuilder,
    public router: Router
    ) { 
      let hijoId = Number(this.activatedRoute.snapshot.paramMap.get('idderhab'));
      console.log('ID DEL HIJO--idderhab '+hijoId)
      this.hijoservice.getHijoDetalle(hijoId).subscribe(
        respuesta=>{
           this.editarForm.setValue({
             idderhab:respuesta[0]['IdDerHab'],
             idpersonal:respuesta[0]['IdPersonal'],
             appaterno:respuesta[0]['ApPaterno'],
            apmaterno:respuesta[0]['ApMaterno'],
             nombre1:respuesta[0]['Nombre1'],
            nombre2:respuesta[0]['Nombre2'],
            nombrecompleto:"",
           fchnac:respuesta[0]['FchNac'],
     
          })},
          error=>{console.log("adv")})

          
      
    

      this.editarForm=this.formulario.group(
        {
          idderhab:[''],
          idpersonal:[''],
          appaterno:[''],
          apmaterno:[''],
          nombre1:[''],
          nombre2:[''],
          nombrecompleto:[''],
          fchnac:[''],
        }
      )
      console.log("Form");
      console.log(this.editarForm.value);
    }

  ngOnInit(): void {
    
  }
  

  enviarDatos():any{
    console.log(this.editarForm.value);
    this.hijoservice.updateHijos(this.editarForm.value).subscribe(
      respuesta=>{console.log('hijo detalle actualizado')},
      error=>{this.router.navigate(["/personal"])}
    )

  }

  


}
