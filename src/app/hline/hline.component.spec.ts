import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HlineComponent } from './hline.component';

describe('HlineComponent', () => {
  let component: HlineComponent;
  let fixture: ComponentFixture<HlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
