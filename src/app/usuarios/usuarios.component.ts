import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  user:any[] = [];

  constructor(private _servicio:UsersService) {

    this.user = _servicio.obtenerUsuario();
  }

  ngOnInit() {
  }

}
