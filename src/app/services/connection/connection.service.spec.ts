import { TestBed } from '@angular/core/testing';

import { NConnectionService } from './connection.service';

describe('ConnectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NConnectionService = TestBed.get(NConnectionService);
    expect(service).toBeTruthy();
  });
});
