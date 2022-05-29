import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtpModalComponent } from './ftp-modal.component';

describe('FtpModalComponent', () => {
  let component: FtpModalComponent;
  let fixture: ComponentFixture<FtpModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtpModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
