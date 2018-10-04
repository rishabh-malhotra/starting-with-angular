import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottompartComponent } from './bottompart.component';

describe('BottompartComponent', () => {
  let component: BottompartComponent;
  let fixture: ComponentFixture<BottompartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottompartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottompartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
