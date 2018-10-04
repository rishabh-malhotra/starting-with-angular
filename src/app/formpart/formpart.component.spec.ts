import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpartComponent } from './formpart.component';

describe('FormpartComponent', () => {
  let component: FormpartComponent;
  let fixture: ComponentFixture<FormpartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormpartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
