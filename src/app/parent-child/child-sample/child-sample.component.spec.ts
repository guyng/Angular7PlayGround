import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSampleComponent } from './child-sample.component';

describe('ChildSampleComponent', () => {
  let component: ChildSampleComponent;
  let fixture: ComponentFixture<ChildSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
