import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSampleComponent } from './parent-sample.component';

describe('ParentSampleComponent', () => {
  let component: ParentSampleComponent;
  let fixture: ComponentFixture<ParentSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
