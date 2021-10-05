import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalComponent } from './components/personal/personal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DialogpersonalComponent } from './components/dialogpersonal/dialogpersonal.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatDialogModule} from '@angular/material/dialog';
import { PersonalService } from './services/personal.service';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';
import { HijosComponent } from './components/hijos/hijos.component';
import { AddhijosComponent } from './components/addhijos/addhijos.component';
import { MatNativeDateModule } from '@angular/material/core';
import { EdithijosComponent } from './components/edithijos/edithijos.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    DialogpersonalComponent,
    EditComponent,
    HijosComponent,
    AddhijosComponent,
    EdithijosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatCardModule
    
    
  ],
  entryComponents:[DialogpersonalComponent,AddhijosComponent],
  providers: [PersonalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
