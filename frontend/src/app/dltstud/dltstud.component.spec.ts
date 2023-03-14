import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DltstudComponent } from './dltstud.component';

describe('DltstudComponent', () => {
  let component: DltstudComponent;
  let fixture: ComponentFixture<DltstudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DltstudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DltstudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
