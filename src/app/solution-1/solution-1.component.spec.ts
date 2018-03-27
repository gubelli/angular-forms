import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Solution1Component} from './solution-1.component';
import {ReactiveFormsModule} from "@angular/forms";

describe('Solution1Component', () => {
  let component: Solution1Component;
  let fixture: ComponentFixture<Solution1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Solution1Component],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Solution1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
