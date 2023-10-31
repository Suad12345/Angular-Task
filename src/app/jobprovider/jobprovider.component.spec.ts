import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobproviderComponent } from './jobprovider.component';

describe('JobproviderComponent', () => {
  let component: JobproviderComponent;
  let fixture: ComponentFixture<JobproviderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobproviderComponent]
    });
    fixture = TestBed.createComponent(JobproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
