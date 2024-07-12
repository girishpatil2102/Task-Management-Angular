import { Component, inject } from '@angular/core';
import { TasksListComponent } from '../../tasks-list/tasks-list.component';
import { HttpService } from '../../../services/http.service';
import { StateService } from '../../../services/state.service';

@Component({
  selector: 'app-important',
  standalone: true,
  imports: [TasksListComponent],
  templateUrl: './important.component.html',
  styleUrl: './important.component.css'
})
export class ImportantComponent {
  newTask="";
  taskList:any[]=[];
  initialTaskList:any[]=[];
  httpService=inject(HttpService);
  stateService= inject(StateService);

  ngOnInit(){
    this.stateService.searchSubject.subscribe((value)=>{
      if(value){
        this.taskList=this.initialTaskList.filter(x=>x.title.toLowerCase().includes(value.toLowerCase()))
      } else{
        this.taskList=this.initialTaskList;
      }
    })
    this.getAllTasks();
  }
  getAllTasks(){
    this.httpService.getAllTasks().subscribe((result:any)=>{
      this.initialTaskList=this.taskList=result.filter((x:any)=>x.important==true);
    })
  }
  onCompleted(task:any){
    task.completed=true;
    console.log("complete",task)
    this.httpService.updateTask(task).subscribe(()=>{
      this.getAllTasks();
    })
  }
  onImportant(task:any){
    task.important=true;
    console.log("important",task)
    this.httpService.updateTask(task).subscribe(()=>{
      this.getAllTasks();
    })
  }
  onIncomplete(task:any){
    task.completed=false;
    console.log("incomplete",task)
    this.httpService.removeTask(task).subscribe(()=>{
      this.getAllTasks();
    })
  }
  onUnimportant(task:any){
    task.important=false;
    console.log("unImportant",task)
    this.httpService.removeTask(task).subscribe(()=>{
      this.getAllTasks();
    })
  }
  onDelete(task:any){
    this.httpService.deleteTask(task).subscribe(()=>{
      this.getAllTasks();
    })
  }
}
