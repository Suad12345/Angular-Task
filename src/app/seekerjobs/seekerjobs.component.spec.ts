import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerjobsComponent } from './seekerjobs.component';

describe('SeekerjobsComponent', () => {
  let component: SeekerjobsComponent;
  let fixture: ComponentFixture<SeekerjobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeekerjobsComponent]
    });
    fixture = TestBed.createComponent(SeekerjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
