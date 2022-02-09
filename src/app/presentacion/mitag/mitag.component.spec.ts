import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitagComponent } from './mitag.component';

describe('MitagComponent', () => {
  let component: MitagComponent;
  let fixture: ComponentFixture<MitagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MitagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MitagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
