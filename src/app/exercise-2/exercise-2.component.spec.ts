import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Exercise2Component} from './exercise-2.component';
import {ReactiveFormsModule} from "@angular/forms";

describe('Exercise2Component', () => {
  let component: Exercise2Component;
  let fixture: ComponentFixture<Exercise2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise2Component],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
