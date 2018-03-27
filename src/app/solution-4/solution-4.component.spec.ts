import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Solution4Component} from './solution-4.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormHelperService} from "../services/form-helper.service";

describe('Solution4Component', () => {
  let component: Solution4Component;
  let fixture: ComponentFixture<Solution4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Solution4Component],
      imports: [ReactiveFormsModule],
      providers: [FormHelperService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Solution4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
