import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SectionServiceStub } from '../../assets/stubs';
import { SectionsService } from '../services/sections.service';

import { SectionDetailsComponent } from './section-details.component';

describe('SectionDetailsComponent', () => {
  let component: SectionDetailsComponent;
  let fixture: ComponentFixture<SectionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionDetailsComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [{ provide: SectionsService, useClass: SectionServiceStub }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDetailsComponent);
    component = fixture.componentInstance;
    window.history.pushState({ grade: 'Grade 1' }, '', '');
    component.valid = { 1: { st_name: false } }; // mocking one control 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.tableLabel).toBe('First Grade');
  });

  it('should call cancel method', () => {
    const formResetSpy = spyOn(component, 'cancel').and.callThrough();
    component.cancel({
      id: 1,
      st_name: "John",
      st_age: 15,
      st_email: "john.student@gmail.com",
      english: 68,
      maths: 33,
      science: 55,
      social_science: 87
    });
    expect(formResetSpy).toHaveBeenCalled();
  });

  it('should disable submit', () => {
    spyOn(component, 'disableSubmit').and.callThrough();
    const returned_value = component.disableSubmit(1);
    expect(returned_value).toBeTruthy();
  });

  it('should call edit row method', () => {
    const editCallSpy = spyOn(component, 'editRow').and.callThrough();
    component.editRow({
      id: 1,
      st_name: "John",
      st_age: 15,
      st_email: "john.student@gmail.com",
      english: 68,
      maths: 33,
      science: 55,
      social_science: 87
    });
    expect(editCallSpy).toHaveBeenCalled();
  });

});
