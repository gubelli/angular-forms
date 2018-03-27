import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Solution3Component} from './solution-3.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormHelperService} from "../services/form-helper.service";

describe('Solution3Component', () => {
  let component: Solution3Component;
  let fixture: ComponentFixture<Solution3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Solution3Component],
      imports: [ReactiveFormsModule],
      providers: [FormHelperService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Solution3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
