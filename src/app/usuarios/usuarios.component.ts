import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  tareas: Observable<any[]>;
  
  constructor(db: AngularFirestore) {
    this.tareas = db.collection('tareas').valueChanges();
  }

  // user:any[] = [];

  //constructor(private _servicio:UsersService) {

  //  this.user = _servicio.obtenerUsuario();
  //}

  ngOnInit() {
  }

}
