import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecCaisseComponent } from './rec-caisse.component';

describe('RecCaisseComponent', () => {
  let component: RecCaisseComponent;
  let fixture: ComponentFixture<RecCaisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecCaisseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
