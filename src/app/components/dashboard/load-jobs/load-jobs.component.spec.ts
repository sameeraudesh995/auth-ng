import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadJobsComponent } from './load-jobs.component';

describe('LoadJobsComponent', () => {
  let component: LoadJobsComponent;
  let fixture: ComponentFixture<LoadJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
