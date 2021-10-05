import { Component, Input, OnInit } from '@angular/core';
import {PersonalService} from '../../services/personal.service';
import {MatTableDataSource} from '@angular/material/table';
import { Personal,CPersonal } from '../../models/Personal';
import {DialogpersonalComponent} from '../dialogpersonal/dialogpersonal.component';
import {MatDialog} from '@angular/material/dialog';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  
  selection = new SelectionModel<Personal>(true, []);
  

  @Input('ELEMENT_DATA') ELEMENT_DATA !:Personal[];

  displayedColumns: string[] = [
    'IdPersonal',
    'Dni',
    'NombreCompleto',
    'FchNac',
    'FchIngreso',   
    'Accion'
  ];
  dataSource = new MatTableDataSource<Personal>(this.ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  constructor(private SPersonal : PersonalService,
              public dialog:MatDialog,
              
              ) {
                
    
   }

  ngOnInit(): void {
    this.listarPersonal();
  }

  listarPersonal(){
    this.SPersonal.getPersonal().subscribe(
      (data:CPersonal[]) => {
        console.log("Datos Personal Cargados");
        this.dataSource.data = data;
            
      },
      err => console.log(err)
    )
    
  }

  showDialog(){
    this.dialog.open(DialogpersonalComponent).afterClosed().subscribe(result=>{this.listarPersonal()});
  }

  
  onDelete(id:number){
      
      this.SPersonal.deletePersonal(id).subscribe(
        res=>{
          console.log("eliminado");
          
        },error=>{
          console.log("Borrado Adv!");
          this.listarPersonal();
        }
      )
    
  }

  

}
