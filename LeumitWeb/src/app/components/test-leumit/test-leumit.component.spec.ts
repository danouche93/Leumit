import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLeumitComponent } from './test-leumit.component';

describe('TestLeumitComponent', () => {
  let component: TestLeumitComponent;
  let fixture: ComponentFixture<TestLeumitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLeumitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLeumitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
