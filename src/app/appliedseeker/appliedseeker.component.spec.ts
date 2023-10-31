import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedseekerComponent } from './appliedseeker.component';

describe('AppliedseekerComponent', () => {
  let component: AppliedseekerComponent;
  let fixture: ComponentFixture<AppliedseekerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppliedseekerComponent]
    });
    fixture = TestBed.createComponent(AppliedseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
