import { TestBed, inject } from '@angular/core/testing';

import { ChooseHerosService } from './choose-heros.service';

describe('ChooseHerosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChooseHerosService]
    });
  });

  it('should be created', inject([ChooseHerosService], (service: ChooseHerosService) => {
    expect(service).toBeTruthy();
  }));
});
