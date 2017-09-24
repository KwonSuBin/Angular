import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTopnavComponent } from './test-topnav.component';

describe('TestTopnavComponent', () => {
  let component: TestTopnavComponent;
  let fixture: ComponentFixture<TestTopnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTopnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
