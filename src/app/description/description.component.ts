import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Task } from '../model/task';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})

export class DescriptionComponent implements OnInit {

  taskObj : Task = new Task();
  taskArr : Task[] = [];
  taskObjFinal : Task = new Task();

  constructor(private route: ActivatedRoute, private crudService : CrudService) { }

  id_number : number = 0;
  ngOnInit(): void {
    this.id_number = Number(this.route.snapshot.paramMap.get('id'));
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTask();
    let taskObjFinal = this.taskArr.find(o => o.id == this.id_number);

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
