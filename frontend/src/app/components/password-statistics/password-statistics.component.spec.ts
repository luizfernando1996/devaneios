import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStatisticsComponent } from './password-statistics.component';

describe('PasswordStatisticsComponent', () => {
  let component: PasswordStatisticsComponent;
  let fixture: ComponentFixture<PasswordStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordStatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
