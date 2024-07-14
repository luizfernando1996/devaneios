import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordUploadComponent } from './password-upload.component';

describe('PasswordUploadComponent', () => {
  let component: PasswordUploadComponent;
  let fixture: ComponentFixture<PasswordUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
