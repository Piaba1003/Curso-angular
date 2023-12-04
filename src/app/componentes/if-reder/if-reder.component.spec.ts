import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfRederComponent } from './if-reder.component';

describe('IfRederComponent', () => {
  let component: IfRederComponent;
  let fixture: ComponentFixture<IfRederComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfRederComponent]
    });
    fixture = TestBed.createComponent(IfRederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
