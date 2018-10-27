import { TestBed } from '@angular/core/testing';

import { HttpNodejsService } from './http-nodejs.service';

describe('HttpNodejsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpNodejsService = TestBed.get(HttpNodejsService);
    expect(service).toBeTruthy();
  });
});
