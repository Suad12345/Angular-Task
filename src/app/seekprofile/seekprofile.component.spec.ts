import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekprofileComponent } from './seekprofile.component';

describe('SeekprofileComponent', () => {
  let component: SeekprofileComponent;
  let fixture: ComponentFixture<SeekprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeekprofileComponent]
    });
    fixture = TestBed.createComponent(SeekprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
