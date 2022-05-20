import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { SectionsService } from '../services/sections.service';

import { SectionsComponent } from './sections';

describe('Sections', () => {
  let component: SectionsComponent;
  let fixture: ComponentFixture<SectionsComponent>;
  let service: SectionsService;
  let spy: any;
  const mockData = [
    {
        "id": 1,
        "st_name": "John",
        "st_age": 15,
        "st_email": "john.student@gmail.com",
        "english": 68,
        "maths": 33,
        "science": 55,
        "social_science": 87,
        "grade": "Grade 1"
    },
    {
        "id": 2,
        "st_name": "Johnny",
        "st_age": 16,
        "st_email": "johnny.student@gmail.com",
        "english": 75,
        "maths": 56,
        "science": 49,
        "social_science": 63,
        "grade": "Grade 1"
    },
    {
        "id": 3,
        "st_name": "Smith",
        "st_age": 16,
        "st_email": "smith.student@gmail.com",
        "english": 78,
        "maths": 10,
        "science": 76,
        "social_science": 45,
        "grade": "Grade 1"
    },
    {
        "id": 4,
        "st_name": "Warner",
        "st_age": 16,
        "st_email": "warner.student@gmail.com",
        "english": 86,
        "maths": 66,
        "science": 88,
        "social_science": 60,
        "grade": "Grade 2"
    },
    {
        "id": 5,
        "st_name": "Todd",
        "st_age": 15,
        "st_email": "todd.student@gmail.com",
        "english": 44,
        "maths": 35,
        "science": 5,
        "social_science": 80,
        "grade": "Grade 2"
    },
    {
        "id": 6,
        "st_name": "Kelly",
        "st_age": 16,
        "st_email": "kelly.student@gmail.com",
        "english": 87,
        "maths": 67,
        "science": 77,
        "social_science": 39,
        "grade": "Grade 2"
    },
    {
        "id": 7,
        "st_name": "Kate",
        "st_age": 16,
        "st_email": "kate.student@gmail.com",
        "english": 77,
        "maths": 42,
        "science": 45,
        "social_science": 87,
        "grade": "Grade 3"
    },
    {
        "id": 8,
        "st_name": "Ness",
        "st_age": 15,
        "st_email": "ness.student@gmail.com",
        "english": 70,
        "maths": 60,
        "science": 14,
        "social_science": 55,
        "grade": "Grade 3"
    },
    {
        "id": 9,
        "st_name": "Joe",
        "st_age": 16,
        "st_email": "joe.student@gmail.com",
        "english": 90,
        "maths": 78,
        "science": 56,
        "social_science": 45,
        "grade": "Grade 3"
    }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionsComponent ],
      imports:[HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    spy = spyOn(service, 'getSectionsData').and.returnValue(of(mockData));
    expect(component).toBeTruthy();
  });
});
