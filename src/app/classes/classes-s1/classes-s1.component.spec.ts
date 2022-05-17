import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesS1Component } from './classes-s1.component';

describe('ClassesS1Component', () => {
  let component: ClassesS1Component;
  let fixture: ComponentFixture<ClassesS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
