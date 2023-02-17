import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadSpespeComponent } from './download-spespe.component';

describe('DownloadSpespeComponent', () => {
  let component: DownloadSpespeComponent;
  let fixture: ComponentFixture<DownloadSpespeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadSpespeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadSpespeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
