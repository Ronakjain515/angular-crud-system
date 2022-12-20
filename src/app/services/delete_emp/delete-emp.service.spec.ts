import { TestBed } from '@angular/core/testing';

import { DeleteEmpService } from './delete-emp.service';

describe('DeleteEmpService', () => {
  let service: DeleteEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
