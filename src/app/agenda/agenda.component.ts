import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  tareas: Observable<any[]>;
  
  constructor(db: AngularFirestore)  { 
    this.tareas = db.collection('tareas').valueChanges();
  }

  ngOnInit() {
  }

}
