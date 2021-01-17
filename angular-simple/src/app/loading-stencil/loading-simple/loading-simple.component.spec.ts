import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSimpleComponent } from './loading-simple.component';

describe('LoadingSimpleComponent', () => {
  let component: LoadingSimpleComponent;
  let fixture: ComponentFixture<LoadingSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});