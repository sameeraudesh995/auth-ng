import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPhotosComponent } from './load-photos.component';

describe('LoadPhotosComponent', () => {
  let component: LoadPhotosComponent;
  let fixture: ComponentFixture<LoadPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadPhotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
