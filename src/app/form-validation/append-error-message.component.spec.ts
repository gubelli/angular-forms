import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppendErrorMessageComponent} from './append-error-message.component';
import {Component} from "@angular/core";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {By} from "@angular/platform-browser";

@Component({
  selector: 'app-append-error-message-test',
  template: `
    <div>
      <form [formGroup]="form">
        <div app-append-error-message>
          <input id="name" formControlName="name"/>
        </div>
      </form>
    </div>`
})
class TestAppendErrorMessageComponent {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }
}

describe('AppendErrorMessageComponent', () => {
  let component: AppendErrorMessageComponent;
  let fixture: ComponentFixture<TestAppendErrorMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppendErrorMessageComponent, TestAppendErrorMessageComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAppendErrorMessageComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should not show any error message on initialisation', () => {
    expect(fixture.debugElement.query(By.css('.invalid-feedback'))).toBeNull();
  });

});

