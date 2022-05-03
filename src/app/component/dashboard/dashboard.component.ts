import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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

  addTask(){
    this.taskObj.task_name = this.addTaskValue
    this.crudService.addTask(this.taskObj).subscribe(res =>
      {
        this.ngOnInit();
        this.addTaskValue='';
      }, err =>{
        alert(err);
      })
  }
}
