import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFullDetailsComponent } from './service-full-details.component';

describe('ServiceFullDetailsComponent', () => {
  let component: ServiceFullDetailsComponent;
  let fixture: ComponentFixture<ServiceFullDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceFullDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceFullDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
