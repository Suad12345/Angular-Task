import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekjobapplicationComponent } from './seekjobapplication.component';

describe('SeekjobapplicationComponent', () => {
  let component: SeekjobapplicationComponent;
  let fixture: ComponentFixture<SeekjobapplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeekjobapplicationComponent]
    });
    fixture = TestBed.createComponent(SeekjobapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
