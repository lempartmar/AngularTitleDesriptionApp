import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../model/task';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  serviceURL : string;
  constructor(private http : HttpClient) {
    this.serviceURL = "http://localhost:3000/tasks"
  }

  getAllTask() : Observable<Task[]>{
    return this.http.get<Task[]>(this.serviceURL);
  }

  addTask(task : Task) : Observable<Task>{
    return this.http.post<Task>(this.serviceURL, task);
  }
}
