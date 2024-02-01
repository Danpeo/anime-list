import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderBottomComponent } from './border-bottom.component';

describe('BorderBottomComponent', () => {
  let component: BorderBottomComponent;
  let fixture: ComponentFixture<BorderBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorderBottomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BorderBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
