import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesFormComponent } from './launches-form.component';

describe('LaunchesFormComponent', () => {
  let component: LaunchesFormComponent;
  let fixture: ComponentFixture<LaunchesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
