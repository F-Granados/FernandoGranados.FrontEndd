import { Component, Input, OnInit } from '@angular/core';
import {HijosService} from '../../services/hijos.service';
import {MatTableDataSource} from '@angular/material/table';
import { Hijo,CHijo } from '../../models/Hijo';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddhijosComponent } from '../addhijos/addhijos.component';
import { CPersonal } from 'src/app/models/Personal';

@Component({
  selector: 'app-hijos',
  templateUrl: './hijos.component.html',
  styleUrls: ['./hijos.component.scss']
})
export class HijosComponent implements OnInit {

  @Input('ELEMENT_DATA') ELEMENT_DATA !:Hijo[];

  displayedColumns: string[] = [
    'IdDerHab',
    'IdPersonal',
    'ApPaterno',
    'ApMaterno',
    'Nombre1',
    'Nombre2',
    // 'NombreCompleto',
    'FchNac',
    'Accion'
  ];

  dataSource = new MatTableDataSource<Hijo>(this.ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private hijoservice:HijosService,
              private activatedRoute:ActivatedRoute,
              public dialog:MatDialog,
              private router:Router
    ) { }

  ngOnInit(): void {
    this.listarHijos();
  }

  
  listarHijos(){
    let hijoId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.hijoservice.getHijosById(hijoId).subscribe(
      (data:CHijo[])=>{
        console.log("Hijos Cargados");
        this.dataSource.data = data;
      },
      err => console.log(err)
    )
  }

  showDialog(){
    this.dialog.open(AddhijosComponent).afterClosed().subscribe(result=>{this.listarHijos()});
  }

  onDelete(id:number){
      
    console.log("eliminado",id)
    this.hijoservice.deleteHijo(id).subscribe(
      res=>{
        console.log("eliminado");
        
      },error=>{
        console.log("eliminado ADV!");
        this.listarHijos();
      }
    )
  
}
  back(){
    this.router.navigate(['/personal']);
  }

}
