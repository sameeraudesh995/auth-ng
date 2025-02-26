import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosDetailDialogComponent } from './todos-detail-dialog.component';

describe('TodosDetailDialogComponent', () => {
  let component: TodosDetailDialogComponent;
  let fixture: ComponentFixture<TodosDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosDetailDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
