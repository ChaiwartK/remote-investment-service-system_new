import { TestBed } from '@angular/core/testing';

import { SubscriptionSearchingService } from './custoemr.service';

describe('SubscriptionSearchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubscriptionSearchingService = TestBed.get(SubscriptionSearchingService);
    expect(service).toBeTruthy();
  });
});
