import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-todos-detail-dialog',
  standalone: true,
  imports: [],
  templateUrl: './todos-detail-dialog.component.html',
  styleUrl: './todos-detail-dialog.component.scss'
})
export class TodosDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
