import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateSheetComponent } from './generate-sheet.component';

describe('GenerateSheetComponent', () => {
  let component: GenerateSheetComponent;
  let fixture: ComponentFixture<GenerateSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
