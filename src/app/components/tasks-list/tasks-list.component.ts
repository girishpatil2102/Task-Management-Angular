import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent {
  @Input() taskList:any[]=[];
  @Output() important=new EventEmitter<any>();
  @Output() completed=new EventEmitter<any>();
  @Output() incomplete=new EventEmitter<any>();
  @Output() unimportant=new EventEmitter<any>();
  @Output() delete=new EventEmitter<any>();
  
  markImportant(task:any){
    this.important.emit(task);
  }
  markCompleted(task:any){
    this.completed.emit(task);
  }
  inComplete(task:any){
    this.incomplete.emit(task);
  }
  unImportant(task:any){
    this.unimportant.emit(task);
  }
  deleteTask(task:any){
    this.delete.emit(task);
  }
}
