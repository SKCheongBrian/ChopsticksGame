import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLoginSectionComponent } from './account-login-section.component';

describe('AccountLoginSectionComponent', () => {
  let component: AccountLoginSectionComponent;
  let fixture: ComponentFixture<AccountLoginSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountLoginSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountLoginSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
