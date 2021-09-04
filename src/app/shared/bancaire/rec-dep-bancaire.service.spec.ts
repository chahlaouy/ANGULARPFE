import { TestBed } from '@angular/core/testing';

import { RecDepBancaireService } from './rec-dep-bancaire.service';

describe('RecDepBancaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecDepBancaireService = TestBed.get(RecDepBancaireService);
    expect(service).toBeTruthy();
  });
});
