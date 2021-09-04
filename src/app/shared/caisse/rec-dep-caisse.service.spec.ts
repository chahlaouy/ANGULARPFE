import { TestBed } from '@angular/core/testing';

import { RecDepCaisseService } from './rec-dep-caisse.service';

describe('RecDepCaisseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecDepCaisseService = TestBed.get(RecDepCaisseService);
    expect(service).toBeTruthy();
  });
});
