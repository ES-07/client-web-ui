import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrusionComponent } from './intrusion.component';

describe('IntrusionComponent', () => {
  let component: IntrusionComponent;
  let fixture: ComponentFixture<IntrusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrusionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntrusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
