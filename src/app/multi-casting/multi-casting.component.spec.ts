import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCastingComponent } from './multi-casting.component';

describe('MultiCastingComponent', () => {
  let component: MultiCastingComponent;
  let fixture: ComponentFixture<MultiCastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiCastingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiCastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
