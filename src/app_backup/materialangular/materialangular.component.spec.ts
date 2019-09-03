import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialangularComponent } from './materialangular.component';

describe('MaterialangularComponent', () => {
  let component: MaterialangularComponent;
  let fixture: ComponentFixture<MaterialangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
