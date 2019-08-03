import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.css']
})
export class ListAddComponent implements OnInit {

  item:any = {
    fecha:'',
    titulo:'',
    descripcion:'',
    responsable:''
  }

  constructor(private conexion:UsersService) { }

  ngOnInit() {
  }

  agregar() {
    this.conexion.agregarTarea(this.item);
    this.item.fecha = '';
    this.item.titulo = '';
    this.item.descripcion = '';
    this.item.responsable = ''; 
  }

}
