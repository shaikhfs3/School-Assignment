import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { stubbed_data } from '../../assets/stubs';
import { IResponse } from '../types/types';

import { SectionsService } from './sections.service';

describe('SectionsService', () => {
  let httpTestingController: HttpTestingController;
  let service: SectionsService;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(SectionsService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('getSectionsData should return data', (done) => {
    const expectedData: IResponse[] = stubbed_data;

    service.getSectionsData().subscribe(data => {
      expect(data.length).toBeGreaterThan(0);
      done();
    });

    const testRequest = httpTestingController.expectOne('http://localhost:8000/students');
    expect(testRequest.request.method).toEqual('GET');
    testRequest.flush(expectedData);
  });

  xit('updateStudentDetails should return success', (done) => {
    service.updateStudentDetails(stubbed_data[0],"Grade 1").subscribe(data => {
      done();
    });

    const testRequest = httpTestingController.expectOne('http://localhost:8000/students');
    expect(testRequest.request.method).toEqual('PUT');
  });
});
