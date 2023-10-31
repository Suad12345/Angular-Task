import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekjobsearchComponent } from './seekjobsearch.component';

describe('SeekjobsearchComponent', () => {
  let component: SeekjobsearchComponent;
  let fixture: ComponentFixture<SeekjobsearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeekjobsearchComponent]
    });
    fixture = TestBed.createComponent(SeekjobsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
