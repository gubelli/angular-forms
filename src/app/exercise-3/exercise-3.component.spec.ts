import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReactiveFormsModule} from "@angular/forms";
import {Exercise3Component} from "./exercise-3.component";

describe('Exercise3Component', () => {
  let component: Exercise3Component;
  let fixture: ComponentFixture<Exercise3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise3Component],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
