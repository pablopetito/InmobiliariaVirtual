import { RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { UsersService } from './users.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { BarraMenuComponent } from './barra-menu/barra-menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsersDetalleComponent } from './users-detalle/users-detalle.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AgendaComponent } from './agenda/agenda.component';
import { ListComponent } from './componentesAgenda/list/list.component';
import { ListAddComponent } from './componentesAgenda/list-add/list-add.component';

const routes: Routes = [ 
  { path: 'inicio', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'detalleUser/:id', component: UsersDetalleComponent },
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    BarraMenuComponent,
    InicioComponent,
    ContactoComponent,
    UsuariosComponent,
    UsersDetalleComponent,
    AgendaComponent,
    ListComponent,
    ListAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
