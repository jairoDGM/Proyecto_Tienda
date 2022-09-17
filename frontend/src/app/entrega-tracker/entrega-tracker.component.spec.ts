import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaTrackerComponent } from './entrega-tracker.component';

describe('EntregaTrackerComponent', () => {
  let component: EntregaTrackerComponent;
  let fixture: ComponentFixture<EntregaTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregaTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntregaTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
