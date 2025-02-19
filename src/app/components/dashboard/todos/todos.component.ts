import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../../services/todos.service';
import { MatDialog } from '@angular/material/dialog';
import { TodosDetailDialogComponent } from '../todos-detail-dialog/todos-detail-dialog.component';
import {NgForOf} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    NgForOf,
    MatButton
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {

  todos: any[] = [];

  constructor(private todoService: TodosService, private dialog: MatDialog, private router: Router) {}

  ngOnInit() {
    this.loadAllData();
  }

  loadAllData() {
    this.todoService.getAllTodos().subscribe({
      next: (data) => this.todos = data,
      error: (error) => console.log(error),
      complete: () => console.log("Completed"),
    });
  }

  onRowClick(row: any) {
    this.dialog.open(TodosDetailDialogComponent, {
      data: row // Pass the row data to the dialog
    });
  }

  navigateToLoadJobs() {
    this.router.navigate(['/dashboard/load-jobs']);
  }
}
