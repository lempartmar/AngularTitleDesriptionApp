import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-get-task',
  templateUrl: './get-task.component.html',
  styleUrls: ['./get-task.component.css']
})
export class GetTaskComponent implements OnInit {

  taskObj : Task = new Task();
  taskArr : Task[] = [];

  addTaskValue : string = '';


  constructor(private crudService : CrudService) { }

  ngOnInit(): void {
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTask();
  }

  getAllTask(){
    this.crudService.getAllTask().subscribe(res =>
      {
        this.taskArr = res;
      }, err => {
        alert("Unable to get list of tasks");
      });
  }

}
