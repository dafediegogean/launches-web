import { TestBed } from '@angular/core/testing';

import { BasicInformartionService } from './basic-informartion.service';

describe('BasicInformartionService', () => {
  let service: BasicInformartionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicInformartionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
