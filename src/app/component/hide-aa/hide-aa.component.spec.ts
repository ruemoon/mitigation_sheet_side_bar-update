import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideAaComponent } from './hide-aa.component';

describe('HideAaComponent', () => {
  let component: HideAaComponent;
  let fixture: ComponentFixture<HideAaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HideAaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HideAaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
