import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepCaisseComponent } from './dep-caisse.component';

describe('DepCaisseComponent', () => {
  let component: DepCaisseComponent;
  let fixture: ComponentFixture<DepCaisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepCaisseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
