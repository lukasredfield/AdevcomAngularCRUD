import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscritosComponent } from './escritos.component';

describe('EscritosComponent', () => {
  let component: EscritosComponent;
  let fixture: ComponentFixture<EscritosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscritosComponent]
    });
    fixture = TestBed.createComponent(EscritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
