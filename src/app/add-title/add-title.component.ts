import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-add-title',
  templateUrl: './add-title.component.html',
  styleUrls: ['./add-title.component.css']
})
export class AddTitleComponent implements OnInit {


    taskObj : Task = new Task();
    addTaskValue : string = '';
    addDescriptionValue : string = '';


    constructor(private crudService : CrudService) { }

    ngOnInit(): void {
      this.taskObj = new Task();
    }

    addTask(){
      this.taskObj.task_name = this.addTaskValue
      this.taskObj.task_description = this.addDescriptionValue
      this.crudService.addTask(this.taskObj).subscribe(res =>
        {
          this.ngOnInit();
          this.addTaskValue='';
          this.addDescriptionValue = '';
        }, err =>{
          alert(err);
        })
    }
  }
