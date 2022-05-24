import { of } from "rxjs";
import { IResponse } from "src/app/types/types";
export const stubbed_data = [{
    id: 1,
    st_name: "John",
    st_age: 15,
    st_email: "john.student@gmail.com",
    english: 68,
    maths: 33,
    science: 55,
    social_science: 87,
    grade: "Grade 1"
}];
export class SectionServiceStub {
    getSectionsData() {
        return of(stubbed_data);
    }

    updateStudentDetails(row:IResponse,label:string) {
        return of();
    }
}