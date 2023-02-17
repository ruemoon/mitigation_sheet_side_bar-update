import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintMitigationComponent } from './print-mitigation.component';

describe('PrintMitigationComponent', () => {
  let component: PrintMitigationComponent;
  let fixture: ComponentFixture<PrintMitigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintMitigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintMitigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
