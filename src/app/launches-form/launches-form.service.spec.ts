import { TestBed } from '@angular/core/testing';

import { LaunchesFormService } from './launches-form.service';

describe('LaunchesFormService', () => {
  let service: LaunchesFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchesFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
