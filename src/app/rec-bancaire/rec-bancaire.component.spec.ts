import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecBancaireComponent } from './rec-bancaire.component';

describe('RecBancaireComponent', () => {
  let component: RecBancaireComponent;
  let fixture: ComponentFixture<RecBancaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecBancaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecBancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
