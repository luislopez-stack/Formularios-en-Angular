import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TamplateComponent } from './tamplate.component';

describe('TamplateComponent', () => {
  let component: TamplateComponent;
  let fixture: ComponentFixture<TamplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TamplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
