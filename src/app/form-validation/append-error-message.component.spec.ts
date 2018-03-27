import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppendErrorMessageComponent} from './append-error-message.component';

describe('AppendErrorMessageComponent', () => {
  let component: AppendErrorMessageComponent;
  let fixture: ComponentFixture<AppendErrorMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppendErrorMessageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppendErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
