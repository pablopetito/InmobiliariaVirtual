import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user:any[] =
    [
      {nombre:'Pablo', Apellido:'Petito', email:'pablo@petito.com.ar'},
      {nombre:'Graciela', Apellido:'Humerez', email:'grara@gmail.com'}
    ]
  constructor() { }

  obtenerUsuario() { return this.user }
}
