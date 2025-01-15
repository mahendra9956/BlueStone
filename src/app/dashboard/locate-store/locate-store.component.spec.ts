import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocateStoreComponent } from './locate-store.component';

describe('LocateStoreComponent', () => {
  let component: LocateStoreComponent;
  let fixture: ComponentFixture<LocateStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocateStoreComponent]
    });
    fixture = TestBed.createComponent(LocateStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
