import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tareas:any;

  editarTarea: any = {
    fecha: '',
    titulo: '',
    descripcion: '',
    responsable: ''
  };

  constructor(private conexion:UsersService) { 

      this.conexion.listaTareas().subscribe(tarea=>{
       this.tareas = tarea;
   });
  }


  ngOnInit() {
  }

  eliminar(tareaElim) {
    this.conexion.eliminarTarea(tareaElim);
  }

  editar(tareaEditar) {
    this.editarTarea = tareaEditar;
  }

  agregarItemEditado(){
    this.conexion.editaTarea(this.editarTarea)
  }

}
