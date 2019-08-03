import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tareas:any;

  constructor(private conexion:UsersService) { 

      this.conexion.listaTareas().subscribe(tarea=>{ this.tareas = tarea;
      console.log(this.tareas)});
  }


  ngOnInit() {
  }

}
