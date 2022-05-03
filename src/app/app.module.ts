import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { AddTitleComponent } from './add-title/add-title.component';
import { GetTaskComponent } from './get-task/get-task.component';
import { DescriptionComponent } from './description/description.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddTitleComponent,
    GetTaskComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
