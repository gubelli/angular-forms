import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Solution5Component} from './solution-5.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormHelperService} from "../services/form-helper.service";

describe('Solution5Component', () => {
  let component: Solution5Component;
  let fixture: ComponentFixture<Solution5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Solution5Component],
      imports: [ReactiveFormsModule],
      providers: [FormHelperService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Solution5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
