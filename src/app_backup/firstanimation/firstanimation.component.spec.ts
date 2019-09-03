import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstanimationComponent } from './firstanimation.component';

describe('FirstanimationComponent', () => {
  let component: FirstanimationComponent;
  let fixture: ComponentFixture<FirstanimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstanimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
