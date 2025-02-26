import {Component, OnInit} from '@angular/core';
import {JobsService} from '../../../services/jobs.service';
import {NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-load-jobs',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './load-jobs.component.html',
  styleUrl: './load-jobs.component.scss'
})
export class LoadJobsComponent implements OnInit {

  job:any[]=[];

  constructor(
    private router: ActivatedRoute,
    private jobService: JobsService
  ) {}

  ngOnInit(): void {
    this.loadAllData()
  }

  loadAllData() {
    this.jobService.getJobById().subscribe({
      next: (data:any) => this.job = data,
      error: (error) => console.log(error),
      complete: () => console.log("Completed"),
    });
  }
}

