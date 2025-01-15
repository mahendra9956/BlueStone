import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharmComponent } from './charm.component';

describe('CharmComponent', () => {
  let component: CharmComponent;
  let fixture: ComponentFixture<CharmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharmComponent]
    });
    fixture = TestBed.createComponent(CharmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
