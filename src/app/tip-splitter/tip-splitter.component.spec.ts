import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipSplitterComponent } from './tip-splitter.component';

describe('TipSplitterComponent', () => {
  let component: TipSplitterComponent;
  let fixture: ComponentFixture<TipSplitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipSplitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipSplitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
