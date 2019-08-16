import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface tarea { 
      fecha:string;
      titulo:string;
      descripcion:string;
      responsable:string;
 }

@Injectable({providedIn: 'root'})
export class UsersService {

  private tareasCollection: AngularFirestoreCollection<tarea>;
  tareas: Observable<tarea[]>;

  private tareaDoc: AngularFirestoreDocument<tarea>;

  constructor( private dbTarea: AngularFirestore) {
    this.tareasCollection = dbTarea.collection<tarea>('tareas')
    this.tareas = this.tareasCollection.snapshotChanges().pipe(
      map(actions => { 
        return actions.map(a => {
        const data = a.payload.doc.data() as tarea;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    })
    );
  }
 
  listaTareas() {
    return this.tareas;
  }

  agregarTarea(tarea: tarea) {
    this.tareasCollection.add(tarea);
  }

  eliminarTarea(tareaElim) {
    this.tareaDoc = this.dbTarea.doc<tarea>(`tareas/${tareaElim.id}`);
    this.tareaDoc.delete();
    console.log(tareaElim.id);
  }

  editaTarea(tareaElim) {
    this.tareaDoc = this.dbTarea.doc<tarea>(`tareas/${tareaElim.id}`);
    this.tareaDoc.update(tareaElim);
    console.log(tareaElim.id);
  }

}
