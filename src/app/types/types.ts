export interface IStudent {
  id?:number;
  st_name: string;
  st_age: number;
  st_email: string;
  english: number;
  maths: number;
  science: number;
  social_science: number;
  isEdit: boolean;
  }
  export interface IResponse {
    id:number;
    st_name: string;
    st_age: number;
    st_email: string;
    english: number;
    maths: number;
    science: number;
    social_science: number;
    isEdit?: boolean;
  }

  export interface ISubject {
    subject_marks: number;
    subject_name: string;
  }

  
export const COLUMNS_SCHEMA = [
  {
    key: 'st_name',
    type: 'text',
    label: 'Student Name',
    required: true
  },
  {
    key: 'st_age',
    type: 'number',
    label: 'Age',
    required: true,
    pattern:"(^100$)|^[1-9]\d?$"
  },
  {
    key: 'st_email',
    type: 'email',
    label: 'Email',
    required: true
  },
  {
    key: 'english',
    type: 'number',
    label: 'English',
    required: true
  },
  {
    key: 'maths',
    type: 'number',
    label: 'Maths',
    required: true
  },
  {
    key: 'science',
    type: 'number',
    label: 'Science',
    required: true
  },
  {
    key: 'social_science',
    type: 'number',
    label: 'Social Science',
    required: true
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];
