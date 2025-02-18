import {Component, OnInit} from '@angular/core';
import {TodosService} from '../../../services/todos.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit{
  todos:any[]=[

  ];
  constructor(private todoService: TodosService) {
  }

  ngOnInit() {
    this.loadAllData()
  }

   loadAllData() {
    this.todoService.getAllTodos().subscribe({
      next:(data)=>this.todos=data,
      error:(error)=>console.log(error),
      complete:()=>console.log("Completed"),
    })

  }
}
