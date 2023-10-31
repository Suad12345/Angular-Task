import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekeditprofileComponent } from './seekeditprofile.component';

describe('SeekeditprofileComponent', () => {
  let component: SeekeditprofileComponent;
  let fixture: ComponentFixture<SeekeditprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeekeditprofileComponent]
    });
    fixture = TestBed.createComponent(SeekeditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
