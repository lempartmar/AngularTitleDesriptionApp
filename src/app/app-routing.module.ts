import { DescriptionComponent } from './description/description.component';
import { GetTaskComponent } from './get-task/get-task.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTitleComponent } from './add-title/add-title.component';

const routes: Routes =  [
  {
    component: AddTitleComponent,
    path:'add'
  },
  {
    component: DescriptionComponent,
    path:'title/:id'
  },
  {
    component: GetTaskComponent,
    path:''
  }
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
