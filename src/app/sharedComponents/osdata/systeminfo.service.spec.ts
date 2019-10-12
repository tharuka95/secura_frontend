import { TestBed } from '@angular/core/testing';

import { SysteminfoService } from './systeminfo.service';

describe('SysteminfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SysteminfoService = TestBed.get(SysteminfoService);
    expect(service).toBeTruthy();
  });
});
