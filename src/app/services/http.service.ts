import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpClient=inject(HttpClient);

  constructor() { }
  addTask(task:string){
    return this.httpClient.post("http://localhost:3000/tasks",{
      title:task
    })
  }

  getAllTasks(){
    return this.httpClient.get("http://localhost:3000/tasks")
  }
  updateTask(task:any){
    return this.httpClient.put("http://localhost:3000/tasks/"+task.id,task)   
    }
  removeTask(task:any){
    return this.httpClient.patch("http://localhost:3000/tasks/"+task.id,task)
  }
  deleteTask(task:any){
    return this.httpClient.delete("http://localhost:3000/tasks/"+task.id,task)
  }
}
