import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToBoxComponent } from './how-to-box.component';

describe('HowToBoxComponent', () => {
  let component: HowToBoxComponent;
  let fixture: ComponentFixture<HowToBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
