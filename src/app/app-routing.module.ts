import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { EdithijosComponent } from './components/edithijos/edithijos.component';
import { HijosComponent } from './components/hijos/hijos.component';
import { PersonalComponent } from './components/personal/personal.component';

const routes: Routes = [
  {path:'',redirectTo:'personal',pathMatch:"full"},
  {path:'personal',component:PersonalComponent,pathMatch:"full"},
  {path:'personal/form/:id',component:EditComponent,pathMatch:"full"},
  {path:'personal/hijo/:id',component:HijosComponent,pathMatch:"full"},
  {path:'personal/hijo/edit/:idderhab',component:EdithijosComponent,pathMatch:"full"},
  // {path:'personal/hijos/detalle/:id',component:AddhijosComponent,pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
