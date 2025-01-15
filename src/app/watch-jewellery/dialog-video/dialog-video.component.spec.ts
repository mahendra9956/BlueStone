import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVideoComponent } from './dialog-video.component';

describe('DialogVideoComponent', () => {
  let component: DialogVideoComponent;
  let fixture: ComponentFixture<DialogVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogVideoComponent]
    });
    fixture = TestBed.createComponent(DialogVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
