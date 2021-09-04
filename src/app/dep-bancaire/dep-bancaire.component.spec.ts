import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepBancaireComponent } from './dep-bancaire.component';

describe('DepBancaireComponent', () => {
  let component: DepBancaireComponent;
  let fixture: ComponentFixture<DepBancaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepBancaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepBancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
