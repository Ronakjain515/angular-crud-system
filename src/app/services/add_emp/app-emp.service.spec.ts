import { TestBed } from '@angular/core/testing';

import { AppEmpService } from './app-emp.service';

describe('AppEmpService', () => {
  let service: AppEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
