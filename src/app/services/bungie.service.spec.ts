import { TestBed } from '@angular/core/testing';

import { BungieService } from './bungie.service';

describe('BungieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BungieService = TestBed.get(BungieService);
    expect(service).toBeTruthy();
  });
});
